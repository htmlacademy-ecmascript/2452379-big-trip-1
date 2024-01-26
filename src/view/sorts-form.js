import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = () => '<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>';

export default class SortsFormView extends AbstractView {
  get template() {
    return createTemplate();
  }
}
