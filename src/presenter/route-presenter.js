import EditRouteFormView from '../view/edit-route-form';
import RouteView from '../view/route.js';
import { render, replace } from '../framework/render.js';
import { onEscKeydownDo } from '../utils/common.js';

export default class RoutePresenter {
  #routesContainer;
  #route;
  #routeView;
  #editRouteView;

  constructor({routesContainer}) {
    this.#routesContainer = routesContainer;
  }

  init(route) {
    this.#route = route;

    this.#routeView = new RouteView({ route: this.#route, onArrowClick: this.#handleOpenEditClick });
    this.#editRouteView = new EditRouteFormView({ route: this.#route, onArrowClick: this.#handleCloseEditClick });

    render(this.#routeView, this.#routesContainer.element);
  }

  #replaceRouteToForm() {
    replace(this.#editRouteView, this.#routeView);
    document.addEventListener('keydown', this.#escKeydownHandler);
  }

  #replaceFormToRoute() {
    replace(this.#routeView, this.#editRouteView);
    document.removeEventListener('keydown', this.#escKeydownHandler);
  }

  #escKeydownHandler = onEscKeydownDo(() => {
    this.#replaceFormToRoute(this.#routeView, this.#editRouteView);
    document.removeEventListener('keydown', this.#escKeydownHandler);
  });

  #handleOpenEditClick = () => {
    this.#replaceRouteToForm();
  };

  #handleCloseEditClick = () => {
    this.#replaceFormToRoute();
  };
}
