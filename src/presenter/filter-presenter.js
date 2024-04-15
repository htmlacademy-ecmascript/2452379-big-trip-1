import FiltersFormView from '../view/filters-form.js';
import { FilterMethods } from '../utils/filters.js';
import { UpdateType, FilterTypes } from '../const.js';
import { render } from '../framework/render.js';

export default class FilterPresenter {
  #container;
  #filtersFormView;
  #routesModel;

  constructor({ containter, routesModel, onFilterChange }) {
    this.#container = containter;
    this.#routesModel = routesModel;
    this.#filtersFormView = new FiltersFormView({ onFilterChange });

    render(this.#filtersFormView, this.#container);

    this.#routesModel.addObserver(this.#handleModelEvent);
  }

  init = ({ reset = false }) => {
    if (reset) {
      this.#filtersFormView.reset();
      return;
    }

    const availableFilters = this.#getAvailableFilters();
    this.#filtersFormView.updateElement({ reset, availableFilters });
  };

  #getAvailableFilters = () => {
    const availableFilters = new Set();
    FilterTypes.forEach(({ type }) => {
      if (
        [...this.#routesModel.routes]
          .map(([, route]) => route)
          .filter(FilterMethods[type])
          .length > 0
      ) {
        availableFilters.add(type);
      }
    });

    return availableFilters;
  };

  #handleModelEvent = (updateType) => {
    switch (updateType) {
      case UpdateType.INIT:
        this.init({});
        break;
      case UpdateType.MINOR:
        this.init({});
        break;
    }
  };
}
