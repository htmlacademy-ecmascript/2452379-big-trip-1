import TravelInfoView from '../view/travel-info.js';
import { SortMethods } from '../utils/sorts.js';
import { getDestinationById, getRoutePrice, humanizeDate } from '../utils/routes.js';
import { DATE_FORMAT } from '../const.js';
import { render, remove, RenderPosition } from '../framework/render.js';

const getTravelRoute = (routes, destinationsAll) => {
  if (routes.length === 0) {
    return;
  }

  const destinations = [...routes].map(([, route]) => route).sort(SortMethods.day).map(({ destination }) => getDestinationById(destinationsAll, destination).name);
  const result = [];

  destinations.forEach((destination) => result[result.length - 1] !== destination && result.push(destination));

  if (result.length < 4) {
    return result.reverse().join(' — ');
  } else {
    return `${result[result.length - 1]} —...— ${result[0]}`;
  }
};

const getTravelDates = (routes) => {
  routes = [...routes].map(([, route]) => route).sort(SortMethods.day);
  return `${humanizeDate(routes[routes.length - 1].dateFrom, DATE_FORMAT.travelInfo)} — ${humanizeDate(routes[0].dateTo, DATE_FORMAT.travelInfo)}`;
};

const getTravelCost = (routes, offers) => {
  offers = [...offers];
  let result = 0;
  routes.forEach((route) => {
    result += getRoutePrice(route, offers);
  });

  return result;
};

export default class TravelInfoPresenter {
  #container;
  #travelInfoView;
  #routesModel;
  #destinationsModel;
  #offersModel;

  constructor({ container, routesModel, destinationsModel, offersModel }) {
    this.#container = container;
    this.#routesModel = routesModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#travelInfoView = new TravelInfoView();
  }

  init() {
    remove(this.#travelInfoView);

    if (!this.#routesModel.routes) {
      return;
    }
    render(this.#travelInfoView, this.#container, RenderPosition.AFTERBEGIN);

    this.#travelInfoView.init({
      title: getTravelRoute(this.#routesModel.routes, this.#destinationsModel.destinations),
      dates: getTravelDates(this.#routesModel.routes),
      cost: getTravelCost(this.#routesModel.routes, this.#offersModel.offers)
    });
  }
}
