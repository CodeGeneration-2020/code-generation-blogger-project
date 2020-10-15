import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import UsersService from '../../services/users.service';

export const ActionTypes = {
  GET_CUSTOMER_BY_ID: 'get_customer_by_id',
  GET_CUSTOMER_COMMENTS: 'get_customer_comments',
  CLEAR_COMMENTS: 'clear_comments',
  CREATE_COMMENT_FOR_CUSTOMER: 'create_comments_for_customer',
};

const getCustomerById = createAsyncThunk(
  ActionTypes.GET_CUSTOMER_BY_ID,
  async (id: number) => {
    const response = await UsersService.getCustomerById(id);
    return response.data;
  },
);

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
      data.score,
    );
    return response.data;
  },
);

const clearComments = createAction(ActionTypes.CLEAR_COMMENTS);

export const ActionCreators = {
  getCustomerById,
  getCustomerComments,
  clearComments,
  createCommentForCustomer,
};
