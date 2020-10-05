import { createSlice } from '@reduxjs/toolkit';
import { ActionTypes } from './actions';

const initialState = {
  active_search: null,
};

const LOCATION_SEARCH_REDUCER = createSlice({
  name: 'LOCATION_SEARCH_REDUCER',
  initialState,
  extraReducers: {
    [ActionTypes.INIT_SEARCH]: (state, action) => {
      return {
        ...state,
        [action.payload]: { input: '', filters: '' },
      };
    },
    [ActionTypes.UPDATE_SEARCH]: (state, action) => {
      return {
        ...state,
        [action.payload.name]: {
          input: action.payload.input,
          filters: action.payload.filters,
        },
      };
    },
    [ActionTypes.SET_ACTIVE_SEACR]: (state, action) => {
      if (state.active_search) {
        return {
          ...state,
          [state.active_search]: { input: '', filters: '' },
          active_search: action.payload,
        };
      } else {
        return {
          ...state,
          active_search: action.payload,
        };
      }
    },
  },
} as any);

export default LOCATION_SEARCH_REDUCER;
