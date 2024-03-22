import { getRouteTimeframe } from './routes.js';

const FilterMethods = {
  'everything': () => true,
  'future': (route) => getRouteTimeframe(route) === 1,
  'present': (route) => getRouteTimeframe(route) === 0,
  'past': (route) => getRouteTimeframe(route) === -1,
};

export { FilterMethods };
