export default class OffersModel {
  #offersApiService;
  #offers = [];

  constructor(offersApiService) {
    this.#offersApiService = offersApiService;
  }

  init() {
    return this.#offersApiService.offers
      .then((offers) => {
        this.#offers = offers;
      });
  }

  get offers() {
    return this.#offers;
  }
}
