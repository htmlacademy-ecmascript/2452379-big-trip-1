import { MessageTypes } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = (message) => `<p class="trip-events__msg">${message}</p>`;

export default class NoRoutesView extends AbstractView {
  #message;

  constructor(filterType) {
    super();
    this.#message = MessageTypes[filterType];
  }

  get template() {
    return createTemplate(this.#message);
  }
}
