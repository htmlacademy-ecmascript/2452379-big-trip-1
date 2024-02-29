import { generateRandomInteger, getRandomArrayElement } from '../utils/common.js';
import { nanoid } from 'nanoid';

const lorem = 'это самый крутой рыбный текст про город название которого написано выше в этом тексте отсутсвует орфография иаая-либо нормальная пнкктуация привет меня зовут Ректанг форм дивизион я с твоим тортом вчера';

const destinations = [ { name: 'Montenegro' }, { name: 'AVAVA' }, { name: 'MAGNITAGORSK' }, { name: 'BAKU' } ];

destinations.forEach((destination) => {
  destination.id = nanoid();
  destination.pictures = Array.from({ length: generateRandomInteger(0,4) }, () => ({'src': `http://loremflickr.com/300/200?random=${generateRandomInteger(1,100)}`, 'description': `${destination.name}`}));
  destination.description = lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200));
});


const getRandomDestination = () => getRandomArrayElement(destinations);

const getAllDesinations = () => destinations;

export { getAllDesinations, getRandomDestination };
