import { createElement } from '../render.js';

class SortsFormComponent {
  element = createElement('<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>');

  getElement() {
    return this.element;
  }
}

export { SortsFormComponent };
