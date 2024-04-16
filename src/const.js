
const SortTypes = [
  { label: 'Day', type: 'day' },
  { label: 'Route', type: 'event', isDisabled: true },
  { label: 'Time', type: 'time' },
  { label: 'Price', type: 'price' },
  { label: 'Offers', type: 'offers', isDisabled: true }
];

const FilterTypes = [
  { name: 'Everything', type: 'everything' },
  { name: 'Present', type: 'present' },
  { name: 'Future', type: 'future' },
  { name: 'Past', type: 'past' },
];

const MessageTypes = {
  'everything': 'Click New Event to create your first point',
  'present': 'There are no present events now',
  'future': 'There are no future events now',
  'past': 'There are no past events now',
  'loading': 'Loading...'
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const DATE_FORMAT = {
  eventTime: 'HH:mm',
  eventDate: 'DD MMM',
  eventEditDatetime: 'DD/MM/YY HH:mm',
  travelInfo: 'DD MMM /YY'
};

const UserAction = {
  UPDATE_TASK: 'UPDATE_TASK',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  INIT: 'INIT',
};

export { SortTypes, UserAction, UpdateType, FilterTypes, MessageTypes, TimeLimit, DATE_FORMAT };
