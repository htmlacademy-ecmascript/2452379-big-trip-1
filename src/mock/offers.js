import { getRandomArraySlice } from '../utils/common.js';
import { nanoid } from 'nanoid';

const offers = [
  {
    type: 'Taxi',
    offers: [
      {
        id: nanoid(),
        title: 'Огромное сиденье',
        price: 20
      },
      {
        id: nanoid(),
        title: 'Маленькое сиденье',
        price: 12
      },
      {
        id: nanoid(),
        title: 'Широкий водитель',
        price: 0
      },
    ]
  },
  {
    type: 'Flight',
    offers: [
      {
        id: nanoid(),
        title: 'Огромный SSL',
        price: 20200
      },
      {
        id: nanoid(),
        title: 'Мисс Кардашьян',
        price: 12
      },
      {
        id: nanoid(),
        title: 'твердое',
        price: 1
      },
    ]
  },
  {
    type: 'Train',
    offers: [
      {
        id: nanoid(),
        title: 'Гоблин-гном',
        price: 243
      },
      {
        id: nanoid(),
        title: 'мммммммм МММ',
        price: 3
      },
    ]
  },
];


const getRandomOffers = (type) => {
  const offersByType = offers.find((offer) => offer.type === type);
  if (offersByType) {
    return getRandomArraySlice([...(offersByType.offers)]).map((offer) => offer.id);
  }
  return [];
};

const getAllOffers = () => [...offers];

export { getRandomOffers, getAllOffers };
