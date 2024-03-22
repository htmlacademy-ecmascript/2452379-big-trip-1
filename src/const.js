const SortTypes = [
  { label: 'Day', type: 'day' },
  { label: 'Route', type: 'event', isDisabled: true },
  { label: 'Time', type: 'time' },
  { label: 'Price', type: 'price' },
  { label: 'Offers', type: 'offers', isDisabled: true }
];

const UserAction = {
  UPDATE_TASK: 'UPDATE_TASK',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const FilterTypes = [
  { name: 'Everything', type: 'everything' },
  { name: 'Present', type: 'present' },
  { name: 'Future', type: 'future' },
  { name: 'Past', type: 'past' },
];

export { SortTypes, UserAction, UpdateType, FilterTypes };
