import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import UsersService from '../../services/users.service';

const ActionTypes = {
  FETCH_BLOGGER: '[BLOGGER] Fetch BLOGGER Data',
};

const getBloggerById = createAsyncThunk(
  ActionTypes.FETCH_BLOGGER,
  async idBlogger => {
    const response = await UsersService.getBloggerById(idBlogger);
    return response.data;
  },
);

const ActionCreators = {
  getBloggerById,
};

export { ActionTypes, ActionCreators };
