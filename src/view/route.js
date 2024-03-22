import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDate, calcEventDuration, getOffersByType } from '../utils/routes.js';
import { wrapHandler } from '../utils/common.js';

const getRouteImageName = (type) => type.toLowerCase().concat('.png');

const createOffersList = (offersAll, routeOffers, type) => {
  let result = '';
  const offersByType = getOffersByType(offersAll, type);

  routeOffers.forEach((offerID) => {
    const offer = offersByType.find(({id}) => id === offerID);

    result += `<li class="event__offer">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
  </li>`;
  });
  return result;
};

const createTemplate = ({type, destination, dateFrom, dateTo, offers, price, isFavorite, offersAll}) => `
<li class="trip-events__item"><div class="event">
<time class="event__date" datetime="${dateFrom}">${humanizeDate(dateFrom, 'eventDate')}</time>
<div class="event__type">
  <img class="event__type-icon" width="42" height="42" src="img/icons/${getRouteImageName(type)}" alt="Event type icon">
</div>
<h3 class="event__title">${type} ${destination.name}</h3>
<div class="event__schedule">
  <p class="event__time">
    <time class="event__start-time" datetime="${dateFrom}">${humanizeDate(Date.parse(dateFrom), 'eventTime')}</time>
    &mdash;
    <time class="event__end-time" datetime="${dateTo}">${humanizeDate(Date.parse(dateTo), 'eventTime')}</time>
  </p>
  <p class="event__duration">${calcEventDuration(dateFrom, dateTo)}</p>
</div>
<p class="event__price">
  &euro;&nbsp;<span class="event__price-value">${price}</span>
</p>
<h4 class="visually-hidden">Offers:</h4>
<ul class="event__selected-offers">
  ${createOffersList(offersAll, offers, type)}
</ul>
<button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
  <span class="visually-hidden">Add to favorite</span>
  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
  </svg>
</button>
<button class="event__rollup-btn" type="button">
  <span class="visually-hidden">Open event</span>
</button>
</div></li>
`;

export default class RouteView extends AbstractView {
  #route;
  #offersAll;

  constructor({ route, offers, onArrowClick, onFavoriteClick }) {
    super();
    this.#route = route;
    this.#offersAll = offers;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', wrapHandler(onArrowClick));
    this.element.querySelector('.event__favorite-btn').addEventListener('click', wrapHandler(onFavoriteClick));
  }

  get template() {
    return createTemplate({...this.#route, offersAll: this.#offersAll});
  }
}
