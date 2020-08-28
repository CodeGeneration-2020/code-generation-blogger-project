import { createAsyncThunk } from '@reduxjs/toolkit';
import UsersService from '../../services/users.service';

const ActionTypes = {
  GET_BLOGGER_BY_ID: '[BLOGGER] get_blogger_by_id Data',
  GET_BLOGGERS_PAGINATION: '[BLOGGER] get_bloggers pagination',
  GET_BLOGGER_BY_FILTERS: '[BLOGGER] get_bloggers_by_filters',
};

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

const getBloggersPagination = createAsyncThunk(
  ActionTypes.GET_BLOGGERS_PAGINATION,
  async (data: any) => {
    console.log(data);
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
};

export { ActionTypes, ActionCreators };
