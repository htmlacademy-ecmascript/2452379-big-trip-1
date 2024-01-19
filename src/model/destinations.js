import { getRandomDestination } from '../mock/destinations.js';

const DESTINATIONS_COUNT = 3;

export default class DestinationsModel {
  destinations = Array.from({length: DESTINATIONS_COUNT}, getRandomDestination);

  getDestinations() {
    return this.destinations;
  }
}
