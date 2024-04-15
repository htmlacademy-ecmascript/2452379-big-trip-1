import EditRouteFormView from '../view/edit-route-form';
import RouteView from '../view/route.js';
import { render, replace, remove } from '../framework/render.js';
import { arePricesEqual } from '../utils/routes.js';
import { areDatesEqual } from '../utils/dates.js';
import { UserAction, UpdateType } from '../const.js';
import { onEscDo } from '../utils/common.js';

export default class RoutePresenter {
  #routesContainer;
  #route;
  #routeView;
  #editRouteView;

  #offersModel;
  #destinationsModel;
  #isEditOpen = false;

  #dataChangeHandler;
  #handleEditorOpen;

  static #offers = null;
  static #destinations = null;

  constructor({ routesContainer, offers, destinations, handleDataChange, handleEditorOpen }) {
    if (!RoutePresenter.#offers) {
      RoutePresenter.#offers = offers;
    }
    if (!RoutePresenter.#destinations) {
      RoutePresenter.#destinations = destinations;
    }

    this.#routesContainer = routesContainer;
    this.#dataChangeHandler = handleDataChange;
    this.#handleEditorOpen = handleEditorOpen;
  }

  init(route) {
    this.#route = route;
    const prevRouteView = this.#routeView;
    const prevEditRouteView = this.#editRouteView;

    this.#routeView = new RouteView({ route: this.#route, offers: RoutePresenter.#offers, destinations: RoutePresenter.#destinations, handleArrowClick: this.#handleOpenEditClick, handleFavoriteClick: this.#handleFavoriteClick });
    this.#editRouteView = new EditRouteFormView({ route: EditRouteFormView.parseRouteToState(this.#route), offers: RoutePresenter.#offers, destinations: RoutePresenter.#destinations, handleReset: this.#handleDeleteClick, handleSubmit: this.#handleSubmit, handleArrowClick: this.#handleCloseEditClick });

    if (!prevRouteView || !prevEditRouteView) {
      render(this.#routeView, this.#routesContainer.element);
      return;
    }

    if (this.#isEditOpen) {
      replace(this.#routeView, prevEditRouteView);
      this.#isEditOpen = false;
    } else {
      replace(this.#routeView, prevRouteView);
    }

    remove(prevRouteView);
    remove(prevEditRouteView);
  }

  resetView() {
    if (this.#isEditOpen) {
      this.#replaceFormToRoute();
    }
  }

  destroy() {
    remove(this.#routeView);
    remove(this.#editRouteView);
  }

  setSaving() {
    if (this.#isEditOpen) {
      this.#editRouteView.updateElement({
        isDisabled: true,
        isSaving: true
      });
    }
  }

  setDeleting() {
    this.#editRouteView.updateElement({
      isDisabled: true,
      isDeleting: true
    });
  }

  setAborting() {
    const resetState = () => this.#editRouteView.updateElement({ isDisabled: false, isSaving: false, isDeleting: false });
    if (this.#isEditOpen) {
      this.#editRouteView.shake(resetState);
    } else {
      this.#routeView.shake();
    }
  }

  #replaceRouteToForm() {
    this.#handleEditorOpen();
    replace(this.#editRouteView, this.#routeView);
    document.addEventListener('keydown', this.#escKeydownHandler);
    this.#isEditOpen = true;
  }

  #replaceFormToRoute() {
    replace(this.#routeView, this.#editRouteView);
    document.removeEventListener('keydown', this.#escKeydownHandler);
    this.#isEditOpen = false;
  }

  #escKeydownHandler = onEscDo(() => {
    this.#replaceFormToRoute(this.#routeView, this.#editRouteView);
    document.removeEventListener('keydown', this.#escKeydownHandler);
  });

  #handleOpenEditClick = (evt) => {
    evt.preventDefault();
    this.#replaceRouteToForm();
  };

  #handleCloseEditClick = () => {
    this.#replaceFormToRoute();
  };

  #handleFavoriteClick = (evt) => {
    evt.preventDefault();
    this.#dataChangeHandler(UserAction.UPDATE_TASK, UpdateType.PATCH, { ...this.#route, isFavorite: !this.#route.isFavorite });
  };

  #handleDeleteClick = () => {
    this.#dataChangeHandler(UserAction.DELETE_TASK, UpdateType.MINOR, this.#route);
  };

  #handleSubmit = (update) => {
    let updateType = UpdateType.MINOR;
    if (
      areDatesEqual(this.#route.dateFrom, update.dateFrom) &&
      arePricesEqual(this.#route, update, RoutePresenter.#offers) &&
      this.#route.destination === update.destination
    ) {
      updateType = UpdateType.PATCH;
    }

    this.#dataChangeHandler(UserAction.UPDATE_TASK, updateType, { ...this.#route, ...update });
  };
}
