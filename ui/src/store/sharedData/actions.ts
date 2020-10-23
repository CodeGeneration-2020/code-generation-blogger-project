import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import SharedDataService from '../../services/shared-data.service';

const ActionTypes = {
  GET_TAGS: '[SHARED_DATA] get_tags',
  GET_COUNTRY: '[SHARED_DATA] get_country',
  GET_CITY: '[SHARED_DATA] get_city',
  CLEAR_CITIES: '[SHARED_DATA] clear cities',
  CLEAR_CITIES_BY_COUNTRY_ID: '[SHARED_DATA] clear_cities_by_country',
  SET_THEME: `[SHARED_DATA] set theme`,
};

const getTags = createAsyncThunk(ActionTypes.GET_TAGS, async () => {
  const response = await SharedDataService.getTags();
  return response.data;
});

const getCountry = createAsyncThunk(ActionTypes.GET_COUNTRY, async () => {
  const response = await SharedDataService.getCountry();
  return response.data;
});

const getCitiesByCountryId = createAsyncThunk(
  ActionTypes.GET_CITY,
  async countryId => {
    const response = await SharedDataService.getCity(countryId);
    return response.data;
  },
);

const clearCities = createAction(ActionTypes.CLEAR_CITIES);

const clearCityByCountryId = createAction(
  ActionTypes.CLEAR_CITIES_BY_COUNTRY_ID,
);

const setTheme = createAction(ActionTypes.SET_THEME);

const ActionCreators = {
  getTags,
  getCountry,
  getCitiesByCountryId,
  clearCityByCountryId,
  clearCities,
  setTheme,
};

export { ActionTypes, ActionCreators };
