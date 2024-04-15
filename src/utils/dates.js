import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const MSEC_IN_HOUR = 3600000;
const MSEC_IN_DAY = 86400000;


const humanizeDate = (date, format) => date ? dayjs(date).format(format) : '';

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

const areDatesEqual = (dateA, dateB) => dayjs(dateA).isSame(dateB, 'D');

export { humanizeDate, getRouteTimeframe, calcEventDuration, areDatesEqual };
