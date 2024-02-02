import { getRandomArrayElement, getRandomArraySlice } from '../utils/common.js';
import { getRandomOffers } from '../mock/offers.js';
import { getRandomDestination } from './destinations.js';
import { nanoid } from 'nanoid';

const routeTypes = [ 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant' ];


const routes = [
  {
    'id': nanoid(),
    'price': 1100,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T19:54:38',
    'destination': getRandomDestination(),
    'isFavorite': true,
  },
  {
    'id': nanoid(),
    'price': 4150,
    'dateFrom': '2024-01-16T04:24:38',
    'dateTo': '2024-01-16T07:21:38',
    'destination': getRandomDestination(),
    'isFavorite': false,
  },
  {
    'id': nanoid(),
    'price': 10,
    'dateFrom': '2024-01-20T08:20:38',
    'dateTo': '2024-01-21T01:30:38',
    'destination': getRandomDestination(),
    'isFavorite': false,
  },
  {
    'id': nanoid(),
    'price': 110201220,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T09:25:38',
    'destination': getRandomDestination(),
    'isFavorite': true,
  },
  {
    'id': nanoid(),
    'price': 41220,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T09:25:38',
    'destination': getRandomDestination(),
    'isFavorite': false,
  },
  {
    'id': nanoid(),
    'price': 156,
    'dateFrom': '2024-01-18T19:24:38',
    'dateTo': '2024-01-20T09:25:38',
    'destination': getRandomDestination(),
    'isFavorite': false,
  },
];

routes.forEach((route) => {
  const type = getRandomArrayElement(routeTypes);
  route['type'] = type;
  route['offers'] = getRandomOffers(type);
});


const getRandomRoutes = (length) => getRandomArraySlice(routes, length);

export { getRandomRoutes };
