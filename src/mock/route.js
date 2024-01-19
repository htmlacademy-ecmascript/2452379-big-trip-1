import { generateRandomInteger, getRandomArrayElement, getRandomArraySlice } from '../utils.js';

const routeTypes = [ 'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant' ];

const lorem = 'это самый крутой рыбный текст про город название которого написано выше в этом тексте отсутсвует орфография иаая-либо нормальная пнкктуация привет меня зовут Ректанг форм дивизион я с твоим тортом вчера';

const citiesDescriptions = {
  'Montenegro': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200)),
  'AVAVA': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200)),
  'MAGNITAGORSK': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200)),
  'BAKU': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200))
};

const availableOffers = [
  {
    type: 'Taxi',
    offers: [
      {
        title: 'Огромное сиденье',
        price: 20
      },
      {
        title: 'Маленькое сиденье',
        price: 12
      },
      {
        title: 'Широкий водитель',
        price: 0
      },
    ]
  },
  {
    type: 'Flight',
    offers: [
      {
        title: 'Огромный SSL',
        price: 20200
      },
      {
        title: 'Мисс Кардашьян',
        price: 12
      },
      {
        title: 'твердое',
        price: 1
      },
    ]
  },
  {
    type: 'Train',
    offers: [
      {
        title: 'Гоблин-гном',
        price: 243
      },
      {
        title: 'мммммммм МММ',
        price: 3
      },
    ]
  },
];

const routes = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'price': 1100,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T19:54:38',
    'destination': 'AVAVA',
    'is_favorite': false,
    'offers':  getRandomArraySlice(getRandomArrayElement(availableOffers).offers),
    'type': getRandomArrayElement(routeTypes)
  },
  {
    'id': 'f4b62099-123f-4c3d-a702-94eec4a2808c',
    'price': 4150,
    'dateFrom': '2024-01-16T04:24:38',
    'dateTo': '2024-01-16T07:21:38',
    'destination': 'BAKU',
    'is_favorite': false,
    'offers':  getRandomArraySlice(getRandomArrayElement(availableOffers).offers),
    'type': getRandomArrayElement(routeTypes)
  },
  {
    'id': 'falos099-293f-4c3d-a702-94eec4a2808c',
    'price': 10,
    'dateFrom': '2024-01-20T08:20:38',
    'dateTo': '2024-01-21T01:30:38',
    'destination': 'Montenegro',
    'is_favorite': false,
    'offers':  getRandomArraySlice(getRandomArrayElement(availableOffers).offers),
    'type': getRandomArrayElement(routeTypes)
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'price': 110201220,
    'dateFrom': '2024-01-18T09:24:38',
    'dateTo': '2024-01-18T09:25:38',
    'destination': 'MAGNITAGORSK',
    'is_favorite': false,
    'offers':  getRandomArraySlice(getRandomArrayElement(availableOffers).offers),
    'type': getRandomArrayElement(routeTypes)
  },
];

const getRandomRoute = () => getRandomArrayElement(routes);
const getCityDescription = (city) => citiesDescriptions[city];

export { getRandomRoute, getCityDescription };
