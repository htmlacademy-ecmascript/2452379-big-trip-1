import { getRandomArrayElement } from '../utils.js';

const routeTypes = [ 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant' ];


const routes = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'price': 1100,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T19:54:38',
    'destination': 'AVAVA',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': getRandomArrayElement(routeTypes)
  },
  {
    'id': 'f4b62099-123f-4c3d-a702-94eec4a2808c',
    'price': 4150,
    'dateFrom': '2024-01-16T04:24:38',
    'dateTo': '2024-01-16T07:21:38',
    'destination': 'BAKU',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': getRandomArrayElement(routeTypes)
  },
  {
    'id': 'falos099-293f-4c3d-a702-94eec4a2808c',
    'price': 10,
    'dateFrom': '2024-01-20T08:20:38',
    'dateTo': '2024-01-21T01:30:38',
    'destination': 'Montenegro',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': getRandomArrayElement(routeTypes)
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'price': 110201220,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T09:25:38',
    'destination': 'MAGNITAGORSK',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': getRandomArrayElement(routeTypes)
  },
];

const getRandomRoute = () => getRandomArrayElement(routes);

export { getRandomRoute };
