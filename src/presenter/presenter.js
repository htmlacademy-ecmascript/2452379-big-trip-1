import DestinationsModel from '../model/destinations.js';
import OffersModel from '../model/offers.js';
import RoutesModel from '../model/routes.js';
import AddRouteFormView from '../view/add-route-form.js';
import RoutesContainerView from '../view/routes-container.js';
import FilterView from '../view/filter.js';
import FiltersFormView from '../view/filters-form.js';
import SortView from '../view/sort.js';
import SortsFormView from '../view/sorts-form.js';
import RoutesListMessageView from '../view/routes-list-message.js';
import RoutePresenter from './route-presenter.js';
import { render, RenderPosition } from '../framework/render.js';
import { updateItem } from '../utils/common.js';
import { SortTypes } from '../const.js';
import { SortMethods } from '../utils/sorts.js';

export default class Presenter {
  #routesModel;
  #offersModel;
  #destinationsModel;

  #routes;
  #routePresenters;
  #routesContainerView;
  #addRouteFormView;
  #routesListMessageView;

  #filters;
  #filtersFormView;
  #sortViews;
  #sortsFormView;
  #destinations;

  constructor() {
    this.#initModels();
    this.#initViews();

    this.#routePresenters = new Map();
  }

  #initModels() {
    this.#routesModel = new RoutesModel();
    this.#offersModel = new OffersModel();
    this.#destinationsModel = new DestinationsModel();

    this.#routes = [...this.#routesModel.getRoutes()];
  }

  #initViews() {
    this.#filtersFormView = new FiltersFormView();
    this.#filters = [
      new FilterView({ label: 'Everything', type: 'everything' }), new FilterView({ label: 'Future', type: 'future' }),
      new FilterView({ label: 'Present', type: 'present' }), new FilterView({ label: 'Past', type: 'past' })
    ];

    this.#sortsFormView = new SortsFormView({ onSortChange: this.#handleSortChange });
    this.#sortViews = SortTypes.map((sort) => new SortView({sort}));

    this.#routesContainerView = new RoutesContainerView();
    this.#addRouteFormView = new AddRouteFormView();
    this.#routesListMessageView = new RoutesListMessageView();
  }

  present() {
    render(this.#filtersFormView, document.querySelector('.trip-controls__filters'));
    render(this.#sortsFormView, document.querySelector('.trip-events'));
    render(this.#routesContainerView, this.#sortsFormView.element, RenderPosition.AFTEREND);

    this.#filters.forEach((filter) => render(filter, this.#filtersFormView.element));

    if (!this.#routes.length) {
      render(this.#routesListMessageView, this.#routesContainerView.element);
      return;
    }

    this.#sortViews.forEach((sort) => render(sort, this.#sortsFormView.element));
    this.#sortsFormView.sortByDefault();
  }

  #renderRoute(route) {
    const routePresenter = new RoutePresenter({
      routesContainer: this.#routesContainerView,
      offers: this.#offersModel.getOffers(),
      destinations: this.#destinationsModel.getDestinations(),
      handleDataChange: this.#handleRouteChange,
      handleEditorOpen: this.#resetRoutePresenters
    });
    routePresenter.init(route);
    this.#routePresenters.set(route.id, routePresenter);
  }

  #handleRouteChange = (updatedRoute) => {
    this.#routes = updateItem(this.#routes, updatedRoute);
    this.#routePresenters.get(updatedRoute.id).init(updatedRoute);
  };

  #resetRoutePresenters = () => {
    this.#routePresenters.forEach((presenter) => presenter.resetView());
  };

  #clearRoutesList() {
    this.#routePresenters.forEach((item) => item.destroy());
    this.#routePresenters.clear();
  }

  #handleSortChange = (type) => {
    this.#clearRoutesList();
    const sortedRoutes = this.#routes.sort(SortMethods[type]);
    for (let i = 0; i < sortedRoutes.length; i++) {
      this.#renderRoute(sortedRoutes[i]);
    }
  };
}
