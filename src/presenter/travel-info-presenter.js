import TravelInfoView from '../view/travel-info.js';
import { SortMethods } from '../utils/sorts.js';
import { getDestinationById, getRoutePrice } from '../utils/routes.js';
import { humanizeDate, areMonthesEqual, areYearsEqual } from '../utils/dates.js';
import { render, remove, RenderPosition } from '../framework/render.js';

const TRAVEL_ROUTE_DESTINATIONS_COUNT = 4;

const getTravelRoute = (routes, destinationsAll) => {
  if (routes.length === 0) {
    return;
  }

  const destinations = [...routes].map(([, route]) => route).sort(SortMethods.day).map(({ destination }) => getDestinationById(destinationsAll, destination).name);
  const result = [];

  destinations.forEach((destination) => result[result.length - 1] !== destination && result.push(destination));

  if (result.length < TRAVEL_ROUTE_DESTINATIONS_COUNT) {
    return result.join(' — ');
  }

  return `${result[0]} —...— ${result[result.length - 1]}`;
};

const getTravelDates = (routes) => {
  routes = [...routes].map(([, route]) => route).sort(SortMethods.day);
  const dateA = routes[0].dateFrom;
  const dateB = routes[routes.length - 1].dateTo;

  if (areMonthesEqual(dateA, dateB)) {
    return `${humanizeDate(dateA, 'MMM DD')} — ${humanizeDate(dateB, 'DD')}`;
  } else if (areYearsEqual(dateA, dateB)) {
    return `${humanizeDate(dateA, 'MMM DD')} — ${humanizeDate(dateB, 'MMM DD')}`;
  }

  return `${humanizeDate(dateA, 'DD MMM YY')} — ${humanizeDate(dateB, 'DD MMM YY')}`;
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

    if (!this.#routesModel.routes.size) {
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
