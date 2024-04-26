import dayjs from 'dayjs';

const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

const SortMethods = {
  'day': (routeA, routeB) => getWeightForNullDate(routeA.dateFrom, routeB.dateFrom) ?? dayjs(routeA.dateFrom).diff(dayjs(routeB.dateFrom)),
  'time': (routeA, routeB) => dayjs(routeB.dateTo).diff(dayjs(routeB.dateFrom)) - dayjs(routeA.dateTo).diff(dayjs(routeA.dateFrom)),
  'price': (routeA, routeB) => routeB.price - routeA.price
};

export { SortMethods };
