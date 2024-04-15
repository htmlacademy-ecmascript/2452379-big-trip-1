import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { FilterTypes } from '../const.js';

const BLANK_AVAILABLE_FILTERS = new Set([FilterTypes[0].type]);

const createTemplate = ({ currentType, availableFilters }) => {
  let result = '';
  FilterTypes.forEach(({ name, type }) => {
    result += `<div class="trip-filters__filter trip-filters__filter--${type}" data-filter-type="${type}">
        <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === currentType ? 'checked' : ''} ${!availableFilters.has(type) ? 'disabled' : ''}>
        <label class="trip-filters__filter-label" for="filter-${type}">${name}</label>
      </div>`;
  });

  return `<form class="trip-filters" action="#" method="get"><button class="visually-hidden" type="submit">Accept filter</button>${result}</form>`;
};

export default class FiltersFormView extends AbstractStatefulView {
  #handleFilterChange;

  constructor({ onFilterChange }) {
    super();
    this._setState({
      currentType: FilterTypes[0].type,
      availableFilters: BLANK_AVAILABLE_FILTERS
    });

    this.#handleFilterChange = onFilterChange;
    this._restoreHandlers();
  }

  get template() {
    return createTemplate(this._state);
  }

  _restoreHandlers() {
    this.element.addEventListener('click', this.#filterChangeHandler);
  }

  reset() {
    this.element.querySelector(`.trip-filters__filter--${this._state.currentType} input`).checked = false;
    const filterElement = this.element.querySelector(`.trip-filters__filter--${FilterTypes[0].type}`);
    filterElement.querySelector('input').checked = true;

    this._setState({ currentType: FilterTypes[0].type });
    this.#handleFilterChange(FilterTypes[0].type);
  }

  #filterChangeHandler = (evt) => {
    evt.preventDefault();

    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    const currentFilterElement = this.element.querySelector(`.trip-filters__filter--${this._state.currentType}`);
    const filterElement = evt.target.parentElement;

    if (filterElement.querySelector('input[disabled]') || filterElement === currentFilterElement) {
      return;
    }

    currentFilterElement.querySelector('input').checked = false;
    filterElement.querySelector('input').checked = true;

    this._setState({ currentType: filterElement.dataset.filterType });
    this.#handleFilterChange(filterElement.dataset.filterType);
  };
}
