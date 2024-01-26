import { getRandomArrayElement } from '../utils/utils.js';
import { getRandomOffers } from '../mock/offers.js';
import { getRandomDestination } from './destinations.js';

const routeTypes = [ 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant' ];


const routes = [
  {
    'id': crypto.randomUIID,
    'price': 1100,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T19:54:38',
    'destination': getRandomDestination(),
    'is_favorite': false,
  },
  {
    'id': crypto.randomUIID,
    'price': 4150,
    'dateFrom': '2024-01-16T04:24:38',
    'dateTo': '2024-01-16T07:21:38',
    'destination': getRandomDestination(),
    'is_favorite': false,
  },
  {
    'id': crypto.randomUIID,
    'price': 10,
    'dateFrom': '2024-01-20T08:20:38',
    'dateTo': '2024-01-21T01:30:38',
    'destination': getRandomDestination(),
    'is_favorite': false,
  },
  {
    'id': crypto.randomUIID,
    'price': 110201220,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T09:25:38',
    'destination': getRandomDestination(),
    'is_favorite': false,
  },
];

routes.forEach((route) => {
  const type = getRandomArrayElement(routeTypes);
  route['type'] = type;
  route['offers'] = getRandomOffers(type);
});

const getRandomRoute = () => getRandomArrayElement(routes);

export { getRandomRoute };
