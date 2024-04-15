const getOfferById = (offers, id) => offers.find((offer) => offer.id === id);

const getOffersByType = (offers, type) => {
  const offersByType = offers.find((offer) => offer.type === type);
  return offersByType === undefined ? [] : offersByType.offers;
};

const getDestinationById = (destinations, id) => destinations.find((destination) => destination.id === id);

const getRoutePrice = (route, offers) => {
  let result = route.price;

  const offersByType = getOffersByType(offers, route.type);
  route.offers.forEach((offer) => {
    result += getOfferById(offersByType, offer).price;
  });

  return result;
};

const arePricesEqual = (routeA, routeB, offers) => getRoutePrice(routeA, offers) === getRoutePrice(routeB, offers);

export { arePricesEqual, getRoutePrice, getOfferById, getOffersByType, getDestinationById };
