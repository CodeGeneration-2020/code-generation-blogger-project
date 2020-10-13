import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  customerComments: [],
};

const CUSTOMER_REDUCER = createSlice({
  name: 'CUSTOMER_REDUCER',
  initialState,
  extraReducers: {
    [ActionCreators.getCustomerComments.fulfilled as any]: (state, action) => {
      state.customerComments = state.customerComments.concat(action.payload);
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
      };
    },
  },
} as any);

export default CUSTOMER_REDUCER;
