import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = ({ label, type }) => `
<div class="trip-sort__item  trip-sort__item--${type}">
  <input label="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" label="trip-sort" value="sort-${type}" checked>
  <label class="trip-sort__btn" for="sort-${type}">${label}</label>
</div>
`;

export default class SortView extends AbstractView {
  #sort;

  constructor(sortData) {
    super();
    this.#sort = sortData;
  }

  get template() {
    return createTemplate(this.#sort);
  }
}

