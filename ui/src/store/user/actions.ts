import { createAction } from '@reduxjs/toolkit';

const ActionTypes = {
  SET_FILTERS: '[VIDEO SETTINGS] Set Filters',
  SET_FILTER: '[VIDEO SETTINGS] Set Filter',
  INIT_FILTERS: '[VIDEO SETTINGS] Init Filters',
};

const setFilters = createAction(ActionTypes.SET_FILTERS);
const setFilter = createAction(ActionTypes.SET_FILTER);
const initFilters = createAction(ActionTypes.INIT_FILTERS);

const ActionCreators = {
  setFilters,
  setFilter,
  initFilters,
};

export { ActionTypes, ActionCreators };
