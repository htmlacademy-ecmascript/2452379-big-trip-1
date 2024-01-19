import dayjs from 'dayjs';

const DATE_FORMAT = {
  eventTime: 'HH:mm',
  eventDate: 'DD MMM',
  eventEditDatetime: 'DD/MM/YY HH:mm'
};
const humanizeDate = (date, format) => date ? dayjs(date).format(DATE_FORMAT[format]) : '';
const humanizeDuration = (minutes) => {
  minutes = Math.round(minutes / (1000));
  return `${Math.trunc(minutes / 3600) > 0 ? `${Math.trunc(minutes / 3600)}H ${(minutes % 3600) / 60}` : minutes / 60}M`;
};
const calcEventDuration = (dt1, dt2) => dt1 && dt2 ? humanizeDuration(new Date(dt2).getTime() - new Date(dt1).getTime()) : '';

const generateRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (arr, min = 0, max = arr.length - 1) => arr[generateRandomInteger(min, max)];

const getRandomArraySlice = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.slice(0, generateRandomInteger(0, arr.length - 1));
};

export { generateRandomInteger, getRandomArrayElement, humanizeDate, calcEventDuration, getRandomArraySlice };
