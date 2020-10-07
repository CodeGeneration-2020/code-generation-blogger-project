import { PAGINATION } from './../../consts/lists';
import { createSlice } from '@reduxjs/toolkit';
import { ActionTypes } from './actions';
import { bloggerFilters, customerFilters } from '../../consts/lists';
import { IFiltersReducer } from '../../types/index';

const initialState: IFiltersReducer = {
  type: '',
  pagination: {
    bloggers: PAGINATION,
    comments: PAGINATION,
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
          bloggers: PAGINATION,
          comments: PAGINATION,
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
            limit: PAGINATION.limit,
          },
        },
      };
    },
    [ActionTypes.RESET_SKIP]: (state, action) => {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          [action.payload.key]: { skip: 0, limit: PAGINATION.limit },
        },
      };
    },
  },
});

export default USER_REDUCER;
