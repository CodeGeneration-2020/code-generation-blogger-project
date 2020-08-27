import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators } from './actions';

const initialState = {
  bloggerInfo: {},
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
  },
} as any);

export default BLOGGER_REDUCER;
