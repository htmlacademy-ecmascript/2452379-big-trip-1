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
  switch (true) {
    case diff >= MSEC_IN_DAY:
      return dayjs.duration(diff).format('DD[D] HH[H] mm[M]');
    case diff >= MSEC_IN_HOUR:
      return dayjs.duration(diff).format('HH[H] mm[M]');
    case diff < MSEC_IN_HOUR:
      return dayjs.duration(diff).format('mm[M]');
  }
};

const getRouteTimeframe = (route) => {
  const diffFromNowToDateFrom = dayjs().diff(route.dateFrom);
  const diffFromNowToDateTo = dayjs().diff(route.dateTo);

  if (diffFromNowToDateFrom < 0) {
    return 1;
  }
  if (diffFromNowToDateTo > 0) {
    return -1;
  }
  return 0;
};

const getOffersByType = (offers, type) => {
  const offersByType = offers.find((offer) => offer.type === type);
  return offersByType === undefined ? [] : offersByType.offers;
};

const getDestinationById = (destinations, id) => destinations.find((destination) => destination.id === id);

const areDatesEqual = (dateA, dateB) => dayjs(dateA).isSame(dateB, 'D');

export { humanizeDate, getOffersByType, calcEventDuration, areDatesEqual, getRouteTimeframe, getDestinationById };
