import { getRandomOffer } from '../mock/offers.js';


export default class OffersModel {
  getOffers() {
    return getRandomOffer().offers;
  }
}
