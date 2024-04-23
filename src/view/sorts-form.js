import AbstractView from '../framework/view/abstract-view.js';
import { SortTypes } from '../const.js';

const createTemplate = () => {
  let result = '';
  SortTypes.forEach(({ label, type }) => {
    result += `
    <div class="trip-sort__item  trip-sort__item--${type}" data-sort-type="${type}">
      <input label="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" label="trip-sort" value="sort-${type}" disabled>
      <label class="trip-sort__btn" for="sort-${type}">${label}</label>
    </div>`;
  });

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">${result}</form>`;
};

export default class SortsFormView extends AbstractView {
  #currentSort;
  #handleSortChange;

  constructor({ onSortChange }) {
    super();

    this.#currentSort = this.element.querySelector(`.trip-sort__item--${SortTypes[0].type}`);
    this.#currentSort.querySelector('input').checked = true;

    this.#handleSortChange = onSortChange;
    this.element.addEventListener('click', this.#sortChangeHandler);
  }

  get template() {
    return createTemplate();
  }

  enable() {
    SortTypes.forEach(({ type, isDisabled }) => {
      if (!isDisabled) {
        this.element.querySelector(`.trip-sort__item--${type} input`).disabled = false;
      }
    });
  }

  init() {
    this.#currentSort.querySelector('input').checked = false;
    const sortElement = this.element.querySelector(`.trip-sort__item--${SortTypes[0].type}`);
    sortElement.querySelector('input').checked = true;
    this.#currentSort = sortElement;

    this.#handleSortChange(SortTypes[0].type);
  }

  #sortChangeHandler = (evt) => {
    evt.preventDefault();

    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    const sortElement = evt.target.parentElement;

    if (sortElement.querySelector('input[disabled]') || sortElement === this.#currentSort) {
      return;
    }

    this.#currentSort.querySelector('input').checked = !this.#currentSort;

    sortElement.querySelector('input').checked = true;
    this.#currentSort = sortElement;

    this.#handleSortChange(sortElement.dataset.sortType);
  };
}
