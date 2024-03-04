import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { humanizeDate, getOffersByType } from '../utils/views.js';
import { wrapHandler } from '../utils/common.js';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';


const getRouteImageName = (type) => type.toLowerCase().concat('.png');

const createOffersList = (offersAll, routeOffers, type) => {
  let result = '';

  getOffersByType(offersAll, type).forEach((offer) => {
    result += `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-luggage" ${routeOffers.some((id) => id === offer.id) ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${offer.id}">
      <span class="event__offer-title">${offer.title}</span>
      +€&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`;
  });
  return result;
};

const createPicturesList = (pics) => {
  if (pics.length === 0) {
    return '';
  }

  let result = '<div class="event__photos-container"><div class="event__photos-tape">';
  pics.forEach((pic) => {
    result += `<img class="event__photo" src="${pic.src}" alt="${pic.description}">`;
  });
  result += '</div></div>';

  return result;
};

const createDestinationList = (destinations) => {
  let result = '';

  destinations.forEach((destination) => (result += `<option value="${destination.name}"></option>`));

  return result;
};

const createTemplate = ({ type, destination, dateFrom, dateTo, offers, price, offersAll, destinationsAll }) => `
<li class="trip-events__item">
          <form class="event event--edit" action="#" method="post">
            <header class="event__header">
              <div class="event__type-wrapper">
                <label class="event__type  event__type-btn" for="event-type-toggle-1">
                  <span class="visually-hidden">Choose event type</span>
                  <img class="event__type-icon" width="17" height="17" src="img/icons/${getRouteImageName(type)}" alt="Event type icon">
                </label>
                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                <div class="event__type-list">
                  <fieldset class="event__type-group">
                    <legend class="visually-hidden">Event type</legend>

                    <div class="event__type-item">
                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                      <label class="event__type-label  event__type-label--taxi" data-event-type="Taxi" for="event-type-taxi-1">Taxi</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                      <label class="event__type-label  event__type-label--bus" data-event-type="Bus" for="event-type-bus-1">Bus</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                      <label class="event__type-label  event__type-label--train" data-event-type="Train" for="event-type-train-1">Train</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                      <label class="event__type-label  event__type-label--ship" data-event-type="Ship" for="event-type-ship-1">Ship</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                      <label class="event__type-label  event__type-label--drive" data-event-type="Drive" for="event-type-drive-1">Drive</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight">
                      <label class="event__type-label  event__type-label--flight" data-event-type="Flight" for="event-type-flight-1">Flight</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                      <label class="event__type-label  event__type-label--check-in" data-event-type="Check-in" for="event-type-check-in-1">Check-in</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                      <label class="event__type-label  event__type-label--sightseeing" data-event-type="Sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                      <label class="event__type-label  event__type-label--restaurant" data-event-type="Restaurant" for="event-type-restaurant-1">Restaurant</label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="event__field-group  event__field-group--destination">
                <label class="event__label  event__type-output" for="event-destination-1">
                  ${type}
                </label>
                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                <datalist id="destination-list-1">
                  ${createDestinationList(destinationsAll)}
                </datalist>
              </div>

              <div class="event__field-group  event__field-group--time">
                <label class="visually-hidden" for="event-start-time-1">From</label>
                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeDate(dateFrom, 'eventEditDatetime')}">
                &mdash;
                <label class="visually-hidden" for="event-end-time-1">To</label>
                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDate(dateTo, 'eventEditDatetime')}">
              </div>

              <div class="event__field-group  event__field-group--price">
                <label class="event__label" for="event-price-1">
                  <span class="visually-hidden">Price</span>
                  &euro;
                </label>
                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
              </div>

              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
              <button class="event__reset-btn" type="reset">Delete</button>
              <button class="event__rollup-btn" type="button">
                <span class="visually-hidden">Open event</span>
              </button>
            </header>
            <section class="event__details">
              <section class="event__section  event__section--offers">
                <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                <div class="event__available-offers">
                  ${createOffersList(offersAll, offers, type)}
                </div>
              </section>

              <section class="event__section  event__section--destination">
                <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                <p class="event__destination-description">${destination.name} ${destination.description}</p>
                ${createPicturesList(destination.pictures)}
              </section>
            </section>
          </form>
        </li>
`.replace(`value="${type.toLowerCase()}"`, `value="${type.toLowerCase()}" checked`);

export default class EditRouteFormView extends AbstractStatefulView {
  #offersAll;
  #destinationsAll;
  #submitClickHandler;
  #arrowClickHandler;

  #datepickers;

  constructor({ route, offers, destinations, onSubmitClick, onArrowClick }) {
    super();
    this._setState(route);
    this.#offersAll = offers;
    this.#destinationsAll = destinations;

    this.#submitClickHandler = wrapHandler(onSubmitClick);
    this.#arrowClickHandler = wrapHandler(onArrowClick);

    this.#setDatePickers();

    this._restoreHandlers();
  }

  get template() {
    return createTemplate({ ...this._state, offersAll: this.#offersAll, destinationsAll: this.#destinationsAll });
  }

  #setDatePickers() {
    this.#datepickers = flatpickr(this.element.querySelectorAll('.event__input--time'), { enableTime: true, 'time_24hr': true, dateFormat:'d/m/y H:i' });
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#submitClickHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#arrowClickHandler);
    this.element.querySelector('.event__type-group').addEventListener('click', this.#eventTypeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('input', this.#destinationChangeHandler);
  }

  #eventTypeChangeHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === 'LABEL') {
      this._state.type = evt.target.dataset.eventType;
      this.updateElement(this._state);
    }
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const result = this.#destinationsAll.find((destination) => destination.name === evt.target.value);

    if (result) {
      this._state.destination = result;
      this.updateElement(this._state);
    }
  };
}

