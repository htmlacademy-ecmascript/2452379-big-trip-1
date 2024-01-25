import { generateRandomInteger, getRandomArrayElement, getRandomArraySlice } from '../utils/utils.js';

const OFFERS_COUNT = 4;

const offers = [
  {
    type: 'Taxi',
    offers: [
      {
        id: crypto.randomUUID,
        title: 'Огромное сиденье',
        price: 20
      },
      {
        id: crypto.randomUUID,
        title: 'Маленькое сиденье',
        price: 12
      },
      {
        id: crypto.randomUUID,
        title: 'Широкий водитель',
        price: 0
      },
    ]
  },
  {
    type: 'Flight',
    offers: [
      {
        id: crypto.randomUUID,
        title: 'Огромный SSL',
        price: 20200
      },
      {
        id: crypto.randomUUID,
        title: 'Мисс Кардашьян',
        price: 12
      },
      {
        id: crypto.randomUUID,
        title: 'твердое',
        price: 1
      },
    ]
  },
  {
    type: 'Train',
    offers: [
      {
        id: crypto.randomUUID,
        title: 'Гоблин-гном',
        price: 243
      },
      {
        id: crypto.randomUUID,
        title: 'мммммммм МММ',
        price: 3
      },
    ]
  },
];

const getRandomOffers = (type) => {
  const offerByType = offers.find((offer) => offer.type === type);
  if (offerByType) {
    return getRandomArraySlice(offerByType.offers);
  }
  return [];
};

export { getRandomOffers };
