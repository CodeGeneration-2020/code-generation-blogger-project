import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators } from './actions';

const initialState = {
  loading: false,
  bloggerInfo: {},
  bloggers: [],
  error: {},
};

const BLOGGER_REDUCER = createSlice({
  name: 'BLOGGER_REDUCER',
  initialState,
  extraReducers: {
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
  },
} as any);

export default BLOGGER_REDUCER;
