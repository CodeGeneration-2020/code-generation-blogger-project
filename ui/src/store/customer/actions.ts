import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import UsersService from '../../services/users.service';

export const ActionTypes = {
  GET_CUSTOMER_COMMENTS: 'get_customer-comments',
  CLEAR_COMMENTS: 'clear_comments',
  CREATE_COMMENT_FOR_CUSTOMER: 'create_comments_for_customer',
};

const getCustomerComments = createAsyncThunk(
  ActionTypes.GET_CUSTOMER_COMMENTS,
  async (data: any) => {
    const response = await UsersService.getComments(
      'customer',
      data.customerId,
      data.skip,
      data.limit,
    );
    return response.data;
  },
);

const createCommentForCustomer = createAsyncThunk(
  ActionTypes.CREATE_COMMENT_FOR_CUSTOMER,
  async (data: any) => {
    const response = await UsersService.createCommentForCustomer(
      data.bloggerId | 246572,
      data.customerId,
      data.comment,
    );
    return response.data;
  },
);

const clearComments = createAction(ActionTypes.CLEAR_COMMENTS);

export const ActionCreators = {
  getCustomerComments,
  clearComments,
  createCommentForCustomer,
};
