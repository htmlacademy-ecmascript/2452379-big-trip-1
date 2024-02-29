import { getAllDesinations } from '../mock/destinations.js';

export default class DestinationsModel {

  getDestinations() {
    return getAllDesinations();
  }
}
