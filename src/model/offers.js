import { getAllOffers } from '../mock/offers.js';


export default class OffersModel {
  get offers() {
    return getAllOffers();
  }
}
