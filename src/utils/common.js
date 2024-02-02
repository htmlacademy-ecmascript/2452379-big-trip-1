const generateRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (arr, min = 0, max = arr.length - 1) => arr[generateRandomInteger(min, max)];

const getRandomArraySlice = (arr, length = -1) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.slice(0, length === -1 ? generateRandomInteger(0, arr.length - 1) : length);
};

const onEscKeydownDo = (cb, exp = null) => ((evt) => {
  if (evt.key === 'Escape' && (exp ? exp(evt) : true)) {
    evt.preventDefault();
    cb();
  }
});

const wrapHandler = (cb) => ((evt) => {
  evt.preventDefault();
  cb();
});

const updateItem = (items, updatedItem) => items.map((item) => item.id === updateItem.id ? updatedItem : item);


export { generateRandomInteger, getRandomArrayElement, getRandomArraySlice, onEscKeydownDo, wrapHandler, updateItem };
