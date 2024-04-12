import UIBlocker from '../framework/ui-blocker/ui-blocker.js';
import AddRouteView from '../view/add-route.js';
import RoutesContainerView from '../view/routes-container.js';
import SortsFormView from '../view/sorts-form.js';
import RoutesMessageView from '../view/routes-message-view.js';
import TravelInfoPresenter from '../presenter/travel-info-presenter.js';
import FilterPresenter from './filter-presenter.js';
import AddRoutePresenter from './add-route-presenter.js';
import RoutePresenter from './route-presenter.js';
import { remove, render, RenderPosition } from '../framework/render.js';
import { SortMethods } from '../utils/sorts.js';
import { FilterMethods } from '../utils/filters.js';
import { UpdateType, UserAction, MessageTypes, TimeLimit } from '../const.js';

export default class Presenter {
  #routesModel;
  #offersModel;
  #destinationsModel;

  #routePresenters;
  #addRoutePresenter;
  #filterPresenter;
  #travelInfoPresenter;

  #routesContainerView;
  #routesMessageView;
  #sortsFormView;

  #addRouteView;

  #uiBlocker;

  #currentSort;
  #currentFilter;

  #isLoading;

  constructor({ routesModel, offersModel, destinationsModel }) {
    this.#initModels(routesModel, offersModel, destinationsModel);
    this.#initViews();

    this.#routePresenters = new Map();
    this.#travelInfoPresenter = new TravelInfoPresenter({ container: document.querySelector('.trip-main'), routesModel: this.#routesModel, destinationsModel: this.#destinationsModel, offersModel: this.#offersModel });
    this.#addRoutePresenter = new AddRoutePresenter({ container: this.#routesContainerView, offersModel: this.#offersModel, destinationsModel: this.#destinationsModel, handleDataChange: this.#handleViewAction, handleEditorOpen: this.#resetRoutePresenters, handleDestroy: this.#handleDestroy });
    this.#filterPresenter = new FilterPresenter({ routesModel: this.#routesModel, containter: document.querySelector('.trip-controls__filters'), onFilterChange: this.#handleFilterChange });

    this.#currentSort = SortMethods.day;
    this.#currentFilter = FilterMethods.everything;

    this.#isLoading = true;

    this.#uiBlocker = new UIBlocker({
      lowerLimit: TimeLimit.LOWER_LIMIT,
      upperLimit: TimeLimit.UPPER_LIMIT
    });
  }

  get routes() {
    return this.#routesModel.routes;
  }

  #initModels(routesModel, offersModel, destinationsModel) {
    this.#routesModel = routesModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#routesModel.addObserver(this.#handleModelEvent);
  }

  #initViews() {
    this.#routesContainerView = new RoutesContainerView();
    this.#addRouteView = new AddRouteView({ handleClick: this.#handleAddFormClick});
    this.#sortsFormView = new SortsFormView({ onSortChange: this.#handleSortChange });
  }

  present() {
    render(this.#sortsFormView, document.querySelector('.trip-events'));
    render(this.#routesContainerView, this.#sortsFormView.element, RenderPosition.AFTEREND);

    this.#renderRoutes();
  }

  #renderRoutes() {
    if (this.#routesMessageView?.element) {
      remove(this.#routesMessageView);
    }

    if (this.#isLoading) {
      this.#routesMessageView = new RoutesMessageView(MessageTypes.loading);
      render(this.#routesMessageView, this.#routesContainerView.element);
      return;
    }

    const filteredRoutes = [...this.routes].map(([, route]) => route).filter(this.#currentFilter);

    if (!filteredRoutes.length && !this.#addRoutePresenter.isOpened) {
      this.#routesMessageView = new RoutesMessageView(MessageTypes[this.#currentFilter.name]);
      render(this.#routesMessageView, this.#routesContainerView.element);
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

  #handleViewAction = async (userAction, updateType, update) => {
    this.#uiBlocker.block();

    switch (userAction) {
      case UserAction.ADD_TASK:
        this.#addRoutePresenter.setSaving();
        try {
          await this.#routesModel.addRoute(updateType, update);
        } catch {
          this.#addRoutePresenter.setAborting();
        }
        break;
      case UserAction.UPDATE_TASK:
        this.#routePresenters.get(update.id).setSaving();
        try {
          await this.#routesModel.updateRoute(updateType, update);
        } catch {
          this.#routePresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.DELETE_TASK:
        this.#routePresenters.get(update.id).setDeleting();
        try {
          await this.#routesModel.deleteRoute(updateType, update);
        } catch {
          this.#routePresenters.get(update.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#routePresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#closeAddRouteForm();
        this.#clearRoutesList();
        this.#renderRoutes();
        this.#travelInfoPresenter.init();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        render(this.#addRouteView, document.querySelector('.trip-main'));
        this.#travelInfoPresenter.init();
        this.#renderRoutes();
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
    this.#resetRoutePresenters();
    if (this.#addRoutePresenter.isOpened) {
      return;
    }

    this.#addRoutePresenter.init();
    this.#addRouteView.disable();
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
    this.#filterPresenter.init({ reset: true });
    this.#openAddRouteForm();
  };

  #handleDestroy = () => {
    this.#addRouteView.enable();
  };
}
