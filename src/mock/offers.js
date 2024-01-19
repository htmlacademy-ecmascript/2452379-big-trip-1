import { getRandomArrayElement } from '../utils.js';

const offers = [
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

const getRandomOffer = () => getRandomArrayElement(offers);

export { getRandomOffer };
