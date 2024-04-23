import Observable from '../framework/observable.js';
import RoutesAdapter from '../adapter/routes.js';
import { UpdateType } from '../const.js';

export default class RoutesModel extends Observable {
  #routesApiService;
  #routes;

  constructor(routesApiService) {
    super();
    this.#routesApiService = routesApiService;
  }

  get routes() {
    return this.#routes;
  }

  async init() {
    try {
      const response = await this.#routesApiService.routes;
      this.#routes = new Map(
        response.map((route) => [route.id, RoutesAdapter.adaptToClient(route)])
      );
    } catch {
      this.#routes = new Map();
      throw new Error('Can\'t load routes');
    }

    this._notify(UpdateType.INIT);
  }

  async updateRoute(updateType, update) {
    if (!this.#routes.get(update.id)) {
      throw new Error(`Route with ${update.id} is not exist`);
    }
    try {
      const response = RoutesAdapter.adaptToClient(await this.#routesApiService.updateRoute(RoutesAdapter.adaptToServer(update)));

      this.#routes.set(response.id, response);
      this._notify(updateType, response);
    } catch (err) {
      throw new Error('Can\'t update route');
    }
  }

  async addRoute(updateType, update) {
    try {
      const response = RoutesAdapter.adaptToClient(await this.#routesApiService.addRoute(RoutesAdapter.adaptToServer(update)));

      this.#routes.set(response.id, response);
      this._notify(updateType, response);
    } catch {
      throw new Error('Can\'t add route');
    }
  }

  async deleteRoute(updateType, update) {
    try {
      await this.#routesApiService.deleteRoute(RoutesAdapter.adaptToServer(update));

      this.#routes.delete(update.id);
      this._notify(updateType, update);
    } catch {
      throw new Error('Can\'t delete route');
    }
  }
}
