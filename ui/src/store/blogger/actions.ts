import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import UsersService from '../../services/users.service';

const ActionTypes = {
  GET_BLOGGER_BY_ID: '[BLOGGER] get_blogger_by_id Data',
  GET_BLOGGERS_PAGINATION: '[BLOGGER] get_bloggers pagination',
  GET_BLOGGER_BY_FILTERS: '[BLOGGER] get_bloggers_by_filters',
  GET_BLOGGER_COMMENTS: '[BLOGGER] get_blogger_comments',
  CLEAR_BLOGGER_COMMENTS: '[BLOGGER] clear_blogger_comments',
  CLEAR_BLOGGER_INFO: '[BLOGGER] clear_blogger_info',
};

const clearBloggerComments = createAction(ActionTypes.CLEAR_BLOGGER_COMMENTS);
const clearBloggerInfo = createAction(ActionTypes.CLEAR_BLOGGER_INFO);

const getBloggerById = createAsyncThunk(
  ActionTypes.GET_BLOGGER_BY_ID,
  async idBlogger => {
    const response = await UsersService.getBloggerById(idBlogger);
    return response.data;
  },
);

const getBloggerByFilters = createAsyncThunk(
  ActionTypes.GET_BLOGGER_BY_FILTERS,
  async filters => {
    const response = await UsersService.getBloggersByFilters(filters);
    return response.data;
  },
);

const getBloggerComments = createAsyncThunk(
  ActionTypes.GET_BLOGGER_COMMENTS,
  async (data: any) => {
    const response = await UsersService.getComments(
      'blogger',
      data.bloggerId,
      data.skip,
      data.limit,
    );
    return response.data;
  },
);

const getBloggersPagination = createAsyncThunk(
  ActionTypes.GET_BLOGGERS_PAGINATION,
  async (data: any) => {
    const response = await UsersService.getBloggersByFilters(
      data.filters,
      data.skip,
      data.limit,
    );
    return response.data;
  },
);

const ActionCreators = {
  getBloggerById,
  getBloggersPagination,
  getBloggerByFilters,
  getBloggerComments,
  clearBloggerComments,
  clearBloggerInfo,
};

export { ActionTypes, ActionCreators };
