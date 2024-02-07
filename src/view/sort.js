import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = ({ label, type, isDisabled }) => `
<div class="trip-sort__item  trip-sort__item--${type}" data-sort-type="${type}">
  <input label="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" label="trip-sort" value="sort-${type}"${isDisabled ? 'disabled' : ''}>
  <label class="trip-sort__btn" for="sort-${type}">${label}</label>
</div>
`;

export default class SortView extends AbstractView {
  #sort;

  constructor({sort}) {
    super();
    this.#sort = sort;
  }

  get template() {
    return createTemplate(this.#sort);
  }
}

