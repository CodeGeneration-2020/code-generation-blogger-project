import { createSlice } from '@reduxjs/toolkit';
import { ActionTypes } from './actions';
import { bloggerFilters, customerFilters } from '../../consts/lists';
import { IFiltersReducer } from '../../types/index';

const initialState: IFiltersReducer = {
  type: '',
  pagination: {
    bloggers: { skip: 0, limit: 3 },
    comments: { skip: 0, limit: 5 },
  },
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
          [action.payload.title]: action.payload.value,
        },
      };
    },
    [ActionTypes.CLEAR_FILTERS]: state => {
      return {
        ...state,
        filters: {},
        pagination: {
          bloggers: { skip: 0, limit: 3 },
          comments: { skip: 0, limit: 5 },
        },
      };
    },
    [ActionTypes.SET_SKIP]: (state, action) => {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          [action.payload.key]: {
            skip: action.payload.skip,
            limit: action.payload.limit,
          },
        },
      };
    },
    [ActionTypes.RESET_SKIP]: (state, action) => {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          [action.payload.key]: { skip: 0, limit: 3 },
        },
      };
    },
  },
});

export default USER_REDUCER;
