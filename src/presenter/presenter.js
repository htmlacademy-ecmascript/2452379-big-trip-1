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
    this.#routesModel = new RoutesModel();
    this.#offersModel = new OffersModel();
    this.#destinationsModel = new DestinationsModel();

    this.#routes = [...this.#routesModel.getRoutes()];

    this.#routePresenters = new Map();

    this.#filtersFormView = new FiltersFormView();
    this.#sortsFormView = new SortsFormView();
    this.#routesContainerView = new RoutesContainerView();
    this.#filters = [
      new FilterView({ label: 'Everything', type: 'everything' }), new FilterView({ label: 'Future', type: 'future' }),
      new FilterView({ label: 'Present', type: 'present' }), new FilterView({ label: 'Past', type: 'past' })
    ];
    this.#sortViews = [
      new SortView({ label: 'Day', type: 'day' }), new SortView({ label: 'Route', type: 'event' }), new SortView({ label: 'Time', type: 'time' }),
      new SortView({ label: 'Price', type: 'price' }), new SortView({ label: 'Offers', type: 'offers' })
    ];
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
    for (let i = 0; i < this.#routes.length; i++) {
      this.#renderRoute(this.#routes[i]);
    }
  }

  #renderRoute(route) {
    const routePresenter = new RoutePresenter({ routesContainer: this.#routesContainerView, handleDataChange: this.#handleRouteChange });
    routePresenter.init(route);
    this.#routePresenters.set(route.id, routePresenter);
  }

  #handleRouteChange = (updatedRoute) => {
    this.#routes = updateItem(this.#routes, updatedRoute);
    this.#routePresenters.get(updatedRoute.id).init(updatedRoute);
  };

  #resetRoutePresenters = () => {
    this.#routePresenters.forEach((presenter) => {
    });
  };
}
