import { createElement } from '../render.js';

class RoutesContainerView {
  element = createElement('<ul class="trip-events__list"></ul>');

  getElement() {
    return this.element;
  }
}

export { RoutesContainerView };
