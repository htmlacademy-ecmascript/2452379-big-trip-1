import { createElement } from '../render.js';

class FilterView {
  constructor(label, type) {
    this.element = createElement(`
    <div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}">
    <label class="trip-filters__filter-label" for="filter-${type}">${label}</label>
    </div>`);
  }

  getElement() {
    return this.element;
  }
}

export { FilterView };
