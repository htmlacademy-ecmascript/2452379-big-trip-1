import DestinationsModel from './model/destinations.js';
import OffersModel from './model/offers.js';
import RoutesModel from './model/routes.js';
import RouteView from './view/route.js';
import AddRouteFormView from './view/add-route-form.js';
import EditRouteFormView from './view/edit-route-form.js';
import RoutesContainerView from './view/routes-container.js';
import FilterView from './view/filter.js';
import FiltersFormView from './view/filters-form.js';
import SortView from './view/sort.js';
import SortsFormView from './view/sorts-form.js';
import { render, RenderPosition } from './framework/render.js';

export default class Presenter {
  #routesModel;
  #offersModel;
  #destinationsModel;

  #routes;
  #routeViews;
  #routesContainerView;
  #addRouteFormView;
  #editRouteFormView;

  #filters;
  #filtersFormView;
  #sorts;
  #sortsFormView;
  #destinations;

  constructor() {
    this.#offersModel = new OffersModel();

    this.#routesModel = new RoutesModel();
    this.#routes = [...this.#routesModel.getRoutes()];
    this.#routeViews = this.#routes.map((route) => new RouteView({...route, offers: this.#offersModel.getOffers()}));

    this.#destinationsModel = new DestinationsModel();
    this.#destinations = [...this.#destinationsModel.getDestinations()];
    this.#editRouteFormView = new EditRouteFormView({...(this.#routes.shift()), offers: this.#offersModel.getOffers(), destination: this.#destinations[0]});


    this.#filtersFormView = new FiltersFormView();
    this.#sortsFormView = new SortsFormView();
    this.#routesContainerView = new RoutesContainerView();
    this.#filters = [
      new FilterView({label: 'Everything', type: 'everything'}), new FilterView({label: 'Future', type: 'future'}),
      new FilterView({label: 'Present', type: 'present'}), new FilterView({label: 'Past', type: 'past'})
    ];
    this.#sorts = [
      new SortView({label: 'Day', type: 'day'}), new SortView({label: 'Route', type: 'event'}), new SortView({label: 'Time', type: 'time'}),
      new SortView({label: 'Price', type: 'price'}), new SortView({label: 'Offers', type: 'offers'})
    ];
    this.#addRouteFormView = new AddRouteFormView({...(this.#routes.shift()), offers: this.#offersModel.getOffers(), destination: this.#destinations[0]});
  }

  present() {
    render(this.#filtersFormView, document.querySelector('.trip-controls__filters'));
    render(this.#sortsFormView, document.querySelector('.trip-events'));
    render(this.#routesContainerView, this.#sortsFormView.element, RenderPosition.AFTEREND);
    render(this.#addRouteFormView, this.#routesContainerView.element);
    render(this.#editRouteFormView, this.#routesContainerView.element);

    this.#filters.forEach((filter) => render(filter, this.#filtersFormView.element));
    this.#sorts.forEach((sort) => render(sort, this.#sortsFormView.element));
    this.#routeViews.forEach((route) => render(route, this.#routesContainerView.element));
  }
}
