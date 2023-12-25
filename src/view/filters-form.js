import { createElement } from '../render.js';

class FiltersFormComponent {
  element = createElement('<form class="trip-filters" action="#" method="get"><button class="visually-hidden" type="submit">Accept filter</button></form>');

  getElement() {
    return this.element;
  }
}

export { FiltersFormComponent };
