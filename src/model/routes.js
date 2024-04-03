import Observable from '../framework/observable.js';
import RoutesApiService from '../api/routes-api-service.js';
import { UpdateType } from '../const.js';

export default class RoutesModel extends Observable {
  #routesApiService;
  #routes = new Map();

  constructor(routesApiService) {
    super();
    this.#routesApiService = routesApiService;
  }

  get routes() {
    return this.#routes;
  }

  init() {
    this.#routesApiService.routes
      .then((response) => {
        this.#routes = new Map(
          response.map((route) => [route.id, RoutesApiService.adaptToClient(route)])
        );

        this._notify(UpdateType.INIT);
      });
  }

  updateRoute(updateType, update) {
    if (!this.#routes.get(update.id)) {
      throw new Error(`Route with ${update.id} is not exist`);
    }

    this.#routesApiService.updateRoute(RoutesApiService.adaptToServer(update))
      .then(() => {
        this.#routes.set(update.id, update);
        this._notify(updateType, update);
      });
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
