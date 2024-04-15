import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';

export default class AddRouteView extends AbstractView {
  constructor({ handleClick }) {
    super();
    this.element.addEventListener('click', handleClick);
  }

  get template() {
    return createTemplate();
  }

  disable() {
    this.element.disabled = true;
  }

  enable() {
    this.element.disabled = false;
  }
}
