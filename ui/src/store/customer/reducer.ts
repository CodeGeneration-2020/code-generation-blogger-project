import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  customerComments: [],
  averageScore: null,
};

const CUSTOMER_REDUCER = createSlice({
  name: 'CUSTOMER_REDUCER',
  initialState,
  extraReducers: {
    [ActionCreators.getCustomerComments.fulfilled as any]: (state, action) => {
      state.customerComments = state.customerComments.concat(
        action.payload.comments,
      );
      if (action.payload.averageScore) {
        state.averageScore = action.payload.averageScore;
      }
    },
    [ActionCreators.createCommentForCustomer.fulfilled as any]: (
      state,
      action,
    ) => {
      state.customerComments = [action.payload, ...state.customerComments];
    },
    [ActionTypes.CLEAR_COMMENTS]: state => {
      return {
        ...state,
        customerComments: [],
        averageScore: null,
      };
    },
  },
} as any);

export default CUSTOMER_REDUCER;
