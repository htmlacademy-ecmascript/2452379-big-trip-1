import { getRandomOffers } from '../mock/offers.js';


export default class OffersModel {
  getOffers() {
    return getRandomOffers().offers;
  }
}
