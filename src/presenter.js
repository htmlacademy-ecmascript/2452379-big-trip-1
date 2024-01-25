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
import { render, replace, RenderPosition } from './framework/render.js';
import { onEscKeydownDo } from './utils/utils.js';

export default class Presenter {
  #routesModel;
  #offersModel;
  #destinationsModel;

  #routes;
  #routesContainerView;
  #addRouteFormView;

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

    this.#filtersFormView = new FiltersFormView();
    this.#sortsFormView = new SortsFormView();
    this.#routesContainerView = new RoutesContainerView();
    this.#filters = [
      new FilterView({label: 'Everything', type: 'everything'}), new FilterView({label: 'Future', type: 'future'}),
      new FilterView({label: 'Present', type: 'present'}), new FilterView({label: 'Past', type: 'past'})
    ];
    this.#sortViews = [
      new SortView({label: 'Day', type: 'day'}), new SortView({label: 'Route', type: 'event'}), new SortView({label: 'Time', type: 'time'}),
      new SortView({label: 'Price', type: 'price'}), new SortView({label: 'Offers', type: 'offers'})
    ];
    this.#addRouteFormView = new AddRouteFormView();
  }

  present() {
    render(this.#filtersFormView, document.querySelector('.trip-controls__filters'));
    render(this.#sortsFormView, document.querySelector('.trip-events'));
    render(this.#routesContainerView, this.#sortsFormView.element, RenderPosition.AFTEREND);

    this.#filters.forEach((filter) => render(filter, this.#filtersFormView.element));
    this.#sortViews.forEach((sort) => render(sort, this.#sortsFormView.element));
    for (let i = 0; i < this.#routes.length; i++) {
      this.#renderRoute(this.#routes[i]);
    }
  }

  #renderRoute(route) {
    const escKeydownHandler = onEscKeydownDo(() => {
      replaceFormToRoute();
      document.removeEventListener('keydown', escKeydownHandler);
    });

    const editRouteView = new EditRouteFormView({
      route,
      onSubmit: () => {
        replaceFormToRoute();
        document.removeEventListener('keydown', escKeydownHandler);
      },
      onArrowClick: () => replaceFormToRoute()
    });
    const routeView = new RouteView({
      route,
      onArrowClick: () => {
        replaceRouteToForm();
        document.addEventListener('keydown', escKeydownHandler);
      }
    });

    function replaceRouteToForm() {
      replace(editRouteView, routeView);
    }
    function replaceFormToRoute() {
      replace(routeView, editRouteView);
    }

    render(routeView, this.#routesContainerView.element);
  }
}
