import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import RegistrationService from '../../services/registration.service';

const ActionTypes = {
  REGISTER_USER: '[User] Register User',
};

const registerUser = createAsyncThunk(ActionTypes.REGISTER_USER, async user => {
  const response = await RegistrationService.registration(user);
  return response.data;
});

const ActionCreators = {
  registerUser,
};

export { ActionTypes, ActionCreators };
