import AbstractView from '../framework/view/abstract-view.js';
import { wrapHandler } from '../utils/common.js';

const createTemplate = () => '<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>';

export default class SortsFormView extends AbstractView {
  #prevSort;
  #handleSortChange;

  constructor({ onSortChange }) {
    super();
    this.#handleSortChange = onSortChange;
    this.element.addEventListener('click', wrapHandler(this.#sortChangeHandler));
  }

  get template() {
    return createTemplate();
  }

  get #defaultSort() {
    return this.element.querySelector('.trip-sort__item--day');
  }

  sortByDefault = () => {
    this.#prevSort?.querySelector('input').removeAttribute('checked');
    this.#defaultSort.querySelector('input').setAttribute('checked', '');
    this.#prevSort = this.#defaultSort;
    this.#handleSortChange(this.#defaultSort.dataset.sortType);
  };

  #sortChangeHandler = (evt) => {
    if (evt.target.tagName !== 'LABEL') {
      return;
    }

    const sortElement = evt.target.parentElement;

    if (sortElement.querySelector('input[disabled]') || sortElement === this.#prevSort) {
      return;
    }

    this.#prevSort?.querySelector('input').removeAttribute('checked');
    sortElement.querySelector('input').setAttribute('checked', '');
    this.#prevSort = sortElement;

    this.#handleSortChange(sortElement.dataset.sortType);
  };
}
