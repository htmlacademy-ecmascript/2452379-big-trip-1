import { getRandomRoutes } from '../mock/routes.js';
import Observable from '../framework/observable.js';

const ROUTES_COUNT = 5;

export default class RoutesModel extends Observable {
  #routes = new Map(getRandomRoutes(ROUTES_COUNT).map((route) => [route.id, route]));

  get routes() {
    return this.#routes;
  }

  updateRoute(updateType, update) {
    if (!this.#routes.get(update.id)) {
      throw new Error(`Route with ${update.id} is not exist`);
    }

    this.#routes.set(update.id, update);

    this._notify(updateType, update);
  }

  addRoute(updateType, update) {
    this.#routes.set(update.id, update);

    this._notify(updateType, update);
  }

  deleteRoute(updateType, update) {
    this.#routes.delete(update.id);

    this._notify(updateType, update);
  }
}
