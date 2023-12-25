import { createElement } from '../render.js';

class EventsContainerComponent {
  element = createElement('<ul class="trip-events__list"></ul>');

  getElement() {
    return this.element;
  }
}

export { EventsContainerComponent };
