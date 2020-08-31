import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  loading: false,
  bloggerInfo: {},
  bloggerComments: [],
  bloggers: [],
  error: {},
};

const BLOGGER_REDUCER = createSlice({
  name: 'BLOGGER_REDUCER',
  initialState,
  extraReducers: {
    [ActionTypes.CLEAR_BLOGGER_COMMENTS]: state => {
      return {
        ...state,
        bloggerComments: [],
      };
    },
    [ActionCreators.getBloggerById.fulfilled as any]: (state, action) => {
      state.error = {};
      state.bloggerInfo = action.payload;
    },
    [ActionCreators.getBloggersPagination.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getBloggersPagination.fulfilled as any]: (
      state,
      action,
    ) => {
      state.error = {};
      state.loading = false;
      state.bloggers = [...state.bloggers, ...action.payload];
    },
    [ActionCreators.getBloggerByFilters.fulfilled as any]: (state, action) => {
      state.error = {};
      state.bloggers = action.payload;
    },
    [ActionCreators.getBloggerComments.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getBloggerComments.fulfilled as any]: (state, action) => {
      state.error = {};
      state.loading = false;
      state.bloggerComments = [...state.bloggerComments, ...action.payload];
    },
  },
} as any);

export default BLOGGER_REDUCER;
