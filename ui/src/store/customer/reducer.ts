import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  customer: undefined,
  customerComments: [],
  averageScore: null,
  loading: false,
};

const CUSTOMER_REDUCER = createSlice({
  name: 'CUSTOMER_REDUCER',
  initialState,
  extraReducers: {
    [ActionCreators.getCustomerById.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getCustomerById.fulfilled as any]: (state, action) => {
      state.customer = action.payload;
      state.loading = false;
    },
    [ActionCreators.getCustomerComments.rejected as any]: state => {
      state.loading = false;
    },
    [ActionCreators.editCustomerById.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.editCustomerById.fulfilled as any]: (state, action) => {
      state.customer = action.payload;
      state.loading = false;
    },
    [ActionCreators.editCustomerById.rejected as any]: state => {
      state.loading = false;
    },
    [ActionCreators.getCustomerComments.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getCustomerComments.fulfilled as any]: (state, action) => {
      state.customerComments = state.customerComments.concat(
        action.payload.comments,
      );
      if (action.payload.averageScore) {
        state.averageScore = action.payload.averageScore;
      }
      state.loading = false;
    },
    [ActionCreators.getCustomerComments.rejected as any]: state => {
      state.loading = false;
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
