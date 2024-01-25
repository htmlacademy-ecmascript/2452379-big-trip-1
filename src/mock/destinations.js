import { generateRandomInteger, getRandomArrayElement } from '../utils/utils.js';

const lorem = 'это самый крутой рыбный текст про город название которого написано выше в этом тексте отсутсвует орфография иаая-либо нормальная пнкктуация привет меня зовут Ректанг форм дивизион я с твоим тортом вчера';

const citiesDescriptions = {
  'Montenegro': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200)),
  'AVAVA': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200)),
  'MAGNITAGORSK': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200)),
  'BAKU': lorem.substring(generateRandomInteger(1, 100), generateRandomInteger(100, 200))
};

const getRandomDestination = () => {
  const name = getRandomArrayElement(Object.keys(citiesDescriptions));
  const description = citiesDescriptions[name];
  const id = crypto.randomUUID;
  const pics = Array.from({ length: generateRandomInteger(0,4) }, () => ({'src': `http://loremflickr.com/300/200?random=${generateRandomInteger(1,100)}`, 'description': `${name}`}));

  return ({
    'id': id,
    'name': name,
    'description': description,
    'pictures': pics
  });
};

export { getRandomDestination };
