import { generateRandomInteger, getRandomArrayElement } from '../utils.js';

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

  return ({
    'id': id,
    'name': name,
    'description': description,
    'pictures': [
      {
        'src': `http://loremflickr.com/300/200?random=${id}`,
        'description': `${name} parliament building`
      }
    ]
  });
};

export { getRandomDestination };
