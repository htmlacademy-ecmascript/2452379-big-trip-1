import DestinationsModel from '../model/destinations.js';
import OffersModel from '../model/offers.js';
import RoutesModel from '../model/routes.js';
import AddRoutePresenter from './add-route-presenter.js';
import RoutesContainerView from '../view/routes-container.js';
import FiltersFormView from '../view/filters-form.js';
import SortsFormView from '../view/sorts-form.js';
import NoRoutesView from '../view/no-routes-view.js';
import RoutePresenter from './route-presenter.js';
import { remove, render, RenderPosition } from '../framework/render.js';
import { SortMethods } from '../utils/sorts.js';
import { FilterMethods } from '../utils/filters.js';
import { UpdateType, UserAction } from '../const.js';

export default class Presenter {
  #routesModel;
  #offersModel;
  #destinationsModel;

  #routePresenters;
  #addRoutePresenter;
  #routesContainerView;
  #noRoutesView;

  #filtersFormView;
  #sortsFormView;

  #addRouteBtn;

  #currentSort;
  #currentFilter;

  constructor() {
    this.#initModels();
    this.#initViews();

    this.#routePresenters = new Map();
    this.#addRoutePresenter = new AddRoutePresenter({ container: this.#routesContainerView, offersModel: this.#offersModel, destinationsModel: this.#destinationsModel, handleDataChange: this.#handleViewAction, handleEditorOpen: this.#resetRoutePresenters, handleDestroy: this.#handleDestroy });

    this.#currentSort = SortMethods.day;
    this.#currentFilter = FilterMethods.everything;

    this.#addRouteBtn = document.querySelector('.trip-main__event-add-btn');

    this.#addRouteBtn.addEventListener('click', this.#handleAddFormClick);
  }

  get routes() {
    return this.#routesModel.routes;
  }

  #initModels() {
    this.#routesModel = new RoutesModel();
    this.#offersModel = new OffersModel();
    this.#destinationsModel = new DestinationsModel();

    this.#routesModel.addObserver(this.#handleModelEvent);
  }

  #initViews() {
    this.#filtersFormView = new FiltersFormView({ onFilterChange: this.#handleFilterChange });
    this.#sortsFormView = new SortsFormView({ onSortChange: this.#handleSortChange });

    this.#routesContainerView = new RoutesContainerView();
  }

  present() {
    render(this.#filtersFormView, document.querySelector('.trip-controls__filters'));
    render(this.#sortsFormView, document.querySelector('.trip-events'));
    render(this.#routesContainerView, this.#sortsFormView.element, RenderPosition.AFTEREND);

    this.#renderRoutes();
  }

  #renderRoutes() {
    const filteredRoutes = [...this.routes].map(([ , route]) => route).filter(this.#currentFilter);

    if (this.#noRoutesView?.element) {
      remove(this.#noRoutesView);
    }

    if (!filteredRoutes.length) {
      this.#noRoutesView = new NoRoutesView(this.#currentFilter.name);
      render(this.#noRoutesView, this.#routesContainerView.element);
      return;
    }


    filteredRoutes.sort(this.#currentSort).forEach((route) => this.#renderRoute(route));
  }

  #renderRoute(route) {
    const routePresenter = new RoutePresenter({
      routesContainer: this.#routesContainerView,
      offers: this.#offersModel.offers,
      destinations: this.#destinationsModel.destinations,
      handleDataChange: this.#handleViewAction,
      handleEditorOpen: this.#resetRoutePresenters
    });
    routePresenter.init(route);
    this.#routePresenters.set(route.id, routePresenter);
  }

  #handleViewAction = (userAction, updateType, update) => {
    switch (userAction) {
      case UserAction.ADD_TASK:
        this.#routesModel.addRoute(updateType, update);
        break;
      case UserAction.UPDATE_TASK:
        this.#routesModel.updateRoute(updateType, update);
        break;
      case UserAction.DELETE_TASK:
        this.#routesModel.deleteRoute(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#routePresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearRoutesList();
        this.#renderRoutes();
        break;
      case UpdateType.MAJOR:
        break;
    }
  };

  #resetRoutePresenters = () => {
    this.#closeAddRouteForm();
    this.#routePresenters.forEach((presenter) => presenter.resetView());
  };

  #clearRoutesList() {
    this.#routePresenters.forEach((item) => item.destroy());
    this.#routePresenters.clear();
  }

  #handleSortChange = (type) => {
    if (this.#currentSort === SortMethods[type]) {
      return;
    }
    this.#currentSort = SortMethods[type];
    this.#clearRoutesList();
    this.#renderRoutes();
  };

  #handleFilterChange = (type) => {
    if (this.#currentFilter === FilterMethods[type]) {
      return;
    }
    this.#currentFilter = FilterMethods[type];
    this.#sortsFormView.init();
    this.#clearRoutesList();
    this.#renderRoutes();
  };

  #openAddRouteForm = () => {
    this.#addRoutePresenter.init();
    this.#addRouteBtn.disabled = true;
  };

  #closeAddRouteForm = () => {
    if (!this.#addRoutePresenter.isOpened) {
      return;
    }

    this.#addRoutePresenter.destroy();
  };

  #handleAddFormClick = (evt) => {
    evt.preventDefault();
    this.#resetRoutePresenters();
    this.#sortsFormView.init();
    this.#filtersFormView.init();
    this.#openAddRouteForm();
  };

  #handleDestroy = () => {
    this.#addRouteBtn.disabled = false;
  };
}
