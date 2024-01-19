import { getRandomRoute } from '../mock/route.js';

const ROUTES_COUNT = 4;

export default class RoutesModel {
  routes = Array.from({length: ROUTES_COUNT}, getRandomRoute);

  getRoutes() {
    return this.routes;
  }
}
