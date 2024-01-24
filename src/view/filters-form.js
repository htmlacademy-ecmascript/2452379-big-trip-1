import AbstractView from '../framework/view/abstract-view.js';

const createTemplate = () => '<form class="trip-filters" action="#" method="get"><button class="visually-hidden" type="submit">Accept filter</button></form>';

export default class FiltersFormView extends AbstractView {
  #filterForm;

  get template() {
    return createTemplate();
  }
}
