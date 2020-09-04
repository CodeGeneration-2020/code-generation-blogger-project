import { createAction } from '@reduxjs/toolkit';

const ActionTypes = {
  SET_FILTER: '[FILTER] Set Filter',
  INIT_FILTERS: '[FILTERS] Init Filters',
  CLEAR_FILTERS: '[FILTERS] Clear Filters',
  SET_SKIP: '[SKIP] Set Skip',
  RESET_SKIP: '[SKIP] Reset Skip',
};

const setFilter = createAction(ActionTypes.SET_FILTER);
const initFilters = createAction(ActionTypes.INIT_FILTERS);
const clearFilters = createAction(ActionTypes.CLEAR_FILTERS);
const setSkip = createAction(ActionTypes.SET_SKIP);
const resetSkip = createAction(ActionTypes.RESET_SKIP);

const ActionCreators = {
  setFilter,
  initFilters,
  clearFilters,
  setSkip,
  resetSkip,
};

export { ActionTypes, ActionCreators };
