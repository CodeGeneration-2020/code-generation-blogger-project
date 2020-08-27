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
    [ActionCreators.getBloggerById.fulfilled]: (state, action) => {
      state.error = {};
      state.bloggerInfo = action.payload;
    },
  },
});

export default BLOGGER_REDUCER;
