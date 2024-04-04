export default class DestinationsModel {
  #destinationApiService;
  #destinations = [];

  constructor(destinationApiService) {
    this.#destinationApiService = destinationApiService;
  }

  init() {
    return this.#destinationApiService.destinations
      .then((destinations) => {
        this.#destinations = destinations;
      });
  }

  get destinations() {
    return this.#destinations;
  }
}
