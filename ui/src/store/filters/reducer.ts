import { createSlice } from '@reduxjs/toolkit';
import { ActionTypes } from './actions';
import { bloggerFilters, customerFilters } from '../../consts/lists';
import { IFiltersReducer } from '../../types/index';
import { LIMITQUERY } from '../../consts/lists';

const initialState: IFiltersReducer = {
  type: '',
  skip: 0,
  limit: LIMITQUERY,
  filters: {},
};

const USER_REDUCER = createSlice({
  name: 'FILTERS_REDUCER',
  initialState,
  reducers: {},
  extraReducers: {
    [ActionTypes.INIT_FILTERS]: (state, action) => {
      return {
        ...state,
        filters:
          action.payload.type === 'blogger' ? bloggerFilters : customerFilters,
      };
    },
    [ActionTypes.SET_FILTER]: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.title]: { value: action.payload.value },
        },
      };
    },
    [ActionTypes.CLEAR_FILTERS]: state => {
      return {
        ...state,
        filters: {},
        skip: 0,
        limit: LIMITQUERY,
      };
    },
    [ActionTypes.SET_SKIP]: state => {
      return {
        ...state,
        skip: state.skip + state.limit,
      };
    },
    [ActionTypes.RESET_SKIP]: state => {
      return {
        ...state,
        skip: 0,
      };
    },
  },
});

export default USER_REDUCER;
