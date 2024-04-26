import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { getDestinationById, getOffersByType } from '../utils/routes.js';
import { humanizeDate, getMaxDate, getMinDate } from '../utils/dates.js';
import { DATE_FORMAT } from '../const.js';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const BLANK_ROUTE_STATE = {
  price: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  type: 'flight',
  offers: [],

  isDisabled: false,
  isSaving: false,
  isDeleting: false
};

const getRouteImageName = (type) => type.toLowerCase().concat('.png');
const getResetBtnText = (isAddForm, isDeleting) => {
  if (isAddForm) {
    return 'Cancel';
  }

  return isDeleting ? 'Deleting...' : 'Delete';
};

const createOffersSection = (offersAll, routeOffers, type) => {
  const offersByType = getOffersByType(offersAll, type);

  if (!offersByType.length) {
    return '';
  }

  let result = '<section class="event__section  event__section--offers"><h3 class="event__section-title  event__section-title--offers">Offers</h3><div class="event__available-offers">';

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

  result += '</div></section>';


  return result;
};

const createPicturesList = (pics) => {
  if (!pics || pics.length === 0) {
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

const createDestinationSection = (destination) => {
  if (!destination) {
    return '';
  }

  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${destination.name} ${destination.description}</p>
      ${createPicturesList(destination.pictures)}
  </section>`;
};

const createTemplate = ({ type, destination, dateFrom, dateTo, offers, price, offersAll, destinationsAll, isAddForm, isDisabled, isDeleting, isSaving }) => {
  destination = getDestinationById(destinationsAll, destination);
  return `<li class="trip-events__item">
          <form class="event event--edit" action="#" method="post">
            <header class="event__header">
              <div class="event__type-wrapper">
                <label class="event__type  event__type-btn" for="event-type-toggle-1">
                  <span class="visually-hidden">Choose event type</span>
                  <img class="event__type-icon" width="17" height="17" src="img/icons/${getRouteImageName(type)}" alt="Event type icon">
                </label>
                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" ${isDisabled ? 'disabled' : ''}>

                <div class="event__type-list">
                  <fieldset class="event__type-group" ${isDisabled ? 'disabled' : ''}>
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
                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination ? destination.name : ''}" list="destination-list-1" autocomplete="off" ${isDisabled ? 'disabled' : ''}>
                <datalist id="destination-list-1">
                  ${createDestinationList(destinationsAll)}
                </datalist>
              </div>

              <div class="event__field-group  event__field-group--time">
                <label class="visually-hidden" for="event-start-time-1">From</label>
                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeDate(dateFrom, DATE_FORMAT.eventEditDatetime)}" ${isDisabled ? 'disabled' : ''}>
                &mdash;
                <label class="visually-hidden" for="event-end-time-1">To</label>
                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDate(dateTo, DATE_FORMAT.eventEditDatetime)}" ${isDisabled ? 'disabled' : ''}>
              </div>

              <div class="event__field-group  event__field-group--price">
                <label class="event__label" for="event-price-1">
                  <span class="visually-hidden">Price</span>
                  &euro;
                </label>
                <input class="event__input  event__input--price" id="event-price-1" type="number" min="0.01" name="event-price" value="${price}" ${isDisabled ? 'disabled' : ''}>
              </div>

              <button class="event__save-btn  btn  btn--blue" type="submit" ${isDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>
              <button class="event__reset-btn" type="reset" ${isDisabled ? 'disabled' : ''}>${getResetBtnText(isAddForm, isDeleting)}</button>
              ${isAddForm ? '' : `<button class="event__rollup-btn" type="button" ${isDisabled ? 'disabled' : ''}><span class="visually-hidden">Open event</span></button>`}
            </header>
            <section class="event__details">
              ${createOffersSection(offersAll, offers, type)}
              ${createDestinationSection(destination)}
            </section>
          </form>
        </li>
`.replace(`value="${type.toLowerCase()}"`, `value="${type.toLowerCase()}" checked`);
};

export default class EditRouteFormView extends AbstractStatefulView {
  #offersAll;
  #destinationsAll;
  #handleSubmit;
  #arrowClickHandler;
  #resetHandler;

  #datepickerFrom;
  #datepickerTo;

  #isAddForm;

  constructor({ route = BLANK_ROUTE_STATE, isAddForm = false, offers, destinations, handleReset, handleSubmit, handleArrowClick }) {
    super();
    this._setState(route);
    this.#offersAll = offers;
    this.#destinationsAll = destinations;

    this.#handleSubmit = handleSubmit;
    this.#arrowClickHandler = handleArrowClick;
    this.#resetHandler = handleReset;

    this.#isAddForm = isAddForm;

    this.#setDatePickers();

    this._restoreHandlers();
  }

  get template() {
    return createTemplate({ ...this._state, offersAll: this.#offersAll, destinationsAll: this.#destinationsAll, isAddForm: this.#isAddForm });
  }

  removeElement() {
    super.removeElement();

    this.#datepickerFrom.destroy();
    this.#datepickerTo.destroy();
  }

  #setDatePickers() {
    this.#datepickerFrom = flatpickr(this.element.querySelectorAll('#event-start-time-1'), { enableTime: true, 'time_24hr': true, dateFormat: 'd/m/y H:i', maxDate: getMaxDate(this._state.dateTo), onChange: this.#dateFromChangeHandler });
    this.#datepickerTo = flatpickr(this.element.querySelectorAll('#event-end-time-1'), { enableTime: true, 'time_24hr': true, dateFormat: 'd/m/y H:i', minDate: getMinDate(this._state.dateFrom), onChange: this.#dateToChangeHandler });
  }

  _restoreHandlers() {
    this.element.querySelector('form').addEventListener('submit', this.#submitHandler);
    this.element.querySelector('form').addEventListener('reset', this.#resetHandler);
    this.element.querySelector('.event__type-group').addEventListener('click', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('input', this.#destinationChangeHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputHandler);

    if (getOffersByType(this.#offersAll, this._state.type).length > 0) {
      this.element.querySelector('.event__available-offers').addEventListener('input', this.#offersChangeHandler);
    }
    if (!this.#isAddForm) {
      this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#arrowClickHandler);
    }

    this.#setDatePickers();
  }

  #resetOffers = () => {
    this._state.offers = [];
  };

  #typeChangeHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === 'LABEL') {
      this.updateElement({ type: evt.target.dataset.eventType.toLowerCase() });
    }

    this.#resetOffers();
  };

  #offersChangeHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    const selectedOfferID = evt.target.id.replace('event-offer-', '');
    const offerIndex = this._state.offers.indexOf(selectedOfferID);
    if (offerIndex === -1) {
      this._state.offers.push(selectedOfferID);
    } else {
      this._state.offers.splice(offerIndex, 1);
    }
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const result = this.#destinationsAll.find((destination) => destination.name === evt.target.value);

    if (result) {
      this.updateElement({ destination: result.id });
    }
  };

  #priceInputHandler = (evt) => {
    evt.preventDefault();

    this._state.price = evt.target.value;
  };

  #dateFromChangeHandler = ([userDate]) => {
    this.updateElement({ dateFrom: userDate });
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({ dateTo: userDate });
  };

  #submitHandler = (evt) => {
    evt.preventDefault();
    this.#handleSubmit(EditRouteFormView.parseStateToRoute(this._state));
  };

  static parseRouteToState(route) {
    return {
      ...route,
      isDisabled: false,
      isSaving: false,
      isDeleting: false
    };
  }

  static parseStateToRoute(state) {
    delete state.isDisabled;
    delete state.isSaving;
    delete state.isDeleting;

    return state;
  }
}

