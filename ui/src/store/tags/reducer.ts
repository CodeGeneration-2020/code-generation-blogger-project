import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators } from './actions';

const initialState = {
  tags: [],
};

const TAGS_REDUCER = createSlice({
  name: 'TAGS_REDUCER',
  initialState,
  extraReducers: {
    [ActionCreators.getTags.fulfilled as any]: (state, action) => {
      state.tags = action.payload.map(t => ({ value: t._id, label: t.tag }));
    },
  },
} as any);

export default TAGS_REDUCER;
