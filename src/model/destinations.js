import { getAllDesinations } from '../mock/destinations.js';

export default class DestinationsModel {

  get destinations() {
    return getAllDesinations();
  }
}
