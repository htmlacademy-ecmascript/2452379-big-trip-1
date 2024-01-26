import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = ({ label, type }) => `
<div class="trip-filters__filter">
<input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}">
<label class="trip-filters__filter-label" for="filter-${type}">${label}</label>
</div>`;

export default class FilterView extends AbstractView {
  #filter;

  constructor(filterData) {
    super();
    this.#filter = filterData;
  }

  get template() {
    return createTemplate(this.#filter);
  }
}
