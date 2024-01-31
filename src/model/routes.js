import { getRandomRoute } from '../mock/routes.js';

const ROUTES_COUNT = 5;

export default class RoutesModel {
  routes = Array.from({length: ROUTES_COUNT}, getRandomRoute);

  getRoutes() {
    return this.routes;
  }
}
