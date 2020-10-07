import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  loading: false,
  bloggerInfo: {},
  bloggerComments: { comments: [], averageData: {} },
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
        bloggerComments: { comments: [], averageData: {} },
      };
    },
    [ActionTypes.CLEAR_BLOGGER_INFO]: state => {
      return {
        ...state,
        bloggerInfo: {},
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
      state.bloggerComments.comments = state.bloggerComments.comments.concat(
        action.payload.comments,
      );

      if (action.payload.averageData) {
        state.bloggerComments.averageData = action.payload.averageData;
      }
      state.loading = false;
    },
  },
} as any);

export default BLOGGER_REDUCER;
