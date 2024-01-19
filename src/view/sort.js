import { createElement } from '../render.js';

class SortView {
  constructor(label, type) {
    this.element = createElement(`
    <div class="trip-sort__item  trip-sort__item--${type}">
      <input label="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" label="trip-sort" value="sort-${type}" checked>
      <label class="trip-sort__btn" for="sort-${type}">${label}</label>
    </div>`);
  }

  getElement() {
    return this.element;
  }
}

export { SortView };
