import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const DATE_FORMAT = {
  eventTime: 'HH:mm',
  eventDate: 'DD MMM',
  eventEditDatetime: 'DD/MM/YY HH:mm'
};

const MSEC_IN_HOUR = 3600000;
const MSEC_IN_DAY = 86400000;


const humanizeDate = (date, format) => date ? dayjs(date).format(DATE_FORMAT[format]) : '';

const calcEventDuration = (dt1, dt2) => {
  const diff = dayjs(dt2).diff(dayjs(dt1));

  switch(true){
    case diff >= MSEC_IN_DAY:
      return dayjs.duration(diff).format('DD[D] HH[H] mm[M]');
    case diff >= MSEC_IN_HOUR:
      return dayjs.duration(diff).format('HH[H] mm[M]');
    case diff < MSEC_IN_HOUR:
      return dayjs.duration(diff).format('mm[M]');
  }
};


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
