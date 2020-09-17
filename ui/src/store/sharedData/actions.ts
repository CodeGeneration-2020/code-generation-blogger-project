import { createAsyncThunk } from '@reduxjs/toolkit';
import SharedDataService from '../../services/shared-data.service';

const ActionTypes = {
  GET_TAGS: '[SHARED_DATA] get_tags',
  GET_COUNTRY: '[SHARED_DATA] get_country',
  GET_CITY: '[SHARED_DATA] get_city',
};

const getTags = createAsyncThunk(ActionTypes.GET_TAGS, async () => {
  const response = await SharedDataService.getTags();
  return response.data;
});

const getCountry = createAsyncThunk(ActionTypes.GET_COUNTRY, async () => {
  const response = await SharedDataService.getCountry();
  return response.data;
});

const getCity = createAsyncThunk(ActionTypes.GET_CITY, async () => {
  const response = await SharedDataService.getCity();
  return response.data;
});

const ActionCreators = {
  getTags,
  getCountry,
  getCity,
};

export { ActionTypes, ActionCreators };
