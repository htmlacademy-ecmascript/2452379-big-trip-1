import AbstractView from '../framework/view/abstract-view';

const createTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class RoutesListMessageView extends AbstractView {
  constructor(){
    super();
  }

  get template() {
    return createTemplate();
  }
}
