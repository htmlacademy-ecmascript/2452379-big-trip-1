import AbstractView from '../framework/view/abstract-view.js';
import { FilterTypes } from '../const.js';
import { wrapHandler } from '../utils/common.js';

const createTemplate = () => {
  let result = '';
  FilterTypes.forEach(({ name, type }) => {
    result += `<div class="trip-filters__filter trip-filters__filter--${type}" data-filter-type="${type}">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}">
    <label class="trip-filters__filter-label" for="filter-${type}">${name}</label>
    </div>`;
  });

  return `<form class="trip-filters" action="#" method="get"><button class="visually-hidden" type="submit">Accept filter</button>${result}</form>`;
};

export default class FiltersFormView extends AbstractView {
  #currentFilter;
  #handleFilterChange;

  constructor({ onFilterChange }) {
    super();

    this.#currentFilter = this.element.querySelector(`.trip-filters__filter--${FilterTypes[0].type}`);
    this.#currentFilter.querySelector('input').checked = true;

    this.#handleFilterChange = onFilterChange;
    this.element.addEventListener('click', wrapHandler(this.#filterChangeHandler));
  }

  get template() {
    return createTemplate();
  }

  init() {
    this.#currentFilter.querySelector('input').checked = false;
    const sortElement = this.element.querySelector(`.trip-filters__filter--${FilterTypes[0].type}`);
    sortElement.querySelector('input').checked = true;
    this.#currentFilter = sortElement;

    this.#handleFilterChange(FilterTypes[0].type);
  }

  #filterChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    const filterElement = evt.target.parentElement;

    if (filterElement.querySelector('input[disabled]') || filterElement === this.#currentFilter) {
      return;
    }

    this.#currentFilter.querySelector('input').checked = !this.#currentFilter;

    filterElement.querySelector('input').checked = true;
    this.#currentFilter = filterElement;

    this.#handleFilterChange(filterElement.dataset.filterType);
  };
}
