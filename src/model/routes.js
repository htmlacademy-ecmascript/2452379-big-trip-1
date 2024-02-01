import { getRandomRoutes } from '../mock/routes.js';

const ROUTES_COUNT = 5;

export default class RoutesModel {
  #routes = getRandomRoutes(ROUTES_COUNT);

  getRoutes() {
    return this.#routes;
  }
}
