import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import RegistrationService from '../../services/registration.service';
import UsersService from '../../services/users.service';

const ActionTypes = {
  SET_FILTERS: '[VIDEO SETTINGS] Set Filters',
  SET_FILTER: '[VIDEO SETTINGS] Set Filter',
  INIT_FILTERS: '[VIDEO SETTINGS] Init Filters',
  REGISTER_USER: '[User] Register User',
  GET_USERS: '[User] Get Users',
};

const setFilters = createAction(ActionTypes.SET_FILTERS);
const setFilter = createAction(ActionTypes.SET_FILTER);
const initFilters = createAction(ActionTypes.INIT_FILTERS);

const registerUser = createAsyncThunk(ActionTypes.REGISTER_USER, async user => {
  const response = await (RegistrationService as any).registration(user);
  console.log('registerUser: ', response.data);
  return response.data;
});

const getUsers = createAsyncThunk(ActionTypes.GET_USERS, async user => {
  const response = await (UsersService as any).getUsers(user);
  console.log('get users: ', response.data);
  return response.data;
});

const ActionCreators = {
  setFilters,
  setFilter,
  initFilters,
  registerUser,
  getUsers,
};

export { ActionTypes, ActionCreators };
