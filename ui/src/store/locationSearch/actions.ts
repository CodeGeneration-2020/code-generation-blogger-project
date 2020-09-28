import { createAction } from '@reduxjs/toolkit';

const ActionTypes = {
  INIT_SEARCH: '[LOCATION_SEARCH] init_search',
  UPDATE_SEARCH: '[LOCATION_SEARCH] update_search',
  SET_ACTIVE_SEACR: '[SET_ACTIVE_SEACR] set_active_search',
};

const initSearch = createAction(ActionTypes.INIT_SEARCH);

const updateSearch = createAction(ActionTypes.UPDATE_SEARCH);

const setActiveSearch = createAction(ActionTypes.SET_ACTIVE_SEACR);

const ActionCreators = {
  initSearch,
  updateSearch,
  setActiveSearch,
};

export { ActionTypes, ActionCreators };
