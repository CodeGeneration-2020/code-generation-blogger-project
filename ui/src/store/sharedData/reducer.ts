import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  tags: [],
  countries: [],
  cities: [],
  theme: {},
  loading: false,
};

const SHARED_DATA_REDUCER = createSlice({
  name: 'SHARED_DATA_REDUCER',
  initialState,
  extraReducers: {
    [ActionCreators.getTags.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.tags = action.payload.map(t => ({ value: t._id, label: t.tag }));
    },
    [ActionCreators.getTags.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getCountry.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.countries = action.payload.map(country => ({
        value: country.id,
        label: country.name,
        sortName: country.sortname,
        phoneCode: country.phonecode,
      }));
    },
    [ActionCreators.getCountry.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getCity.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.cities = [
        ...state.cities,
        ...action.payload.cities.flat().map(city => ({
          value: city.id,
          label: city.name,
          countryId: action.payload.countryId,
        })),
      ];
    },
    [ActionCreators.getCity.pending as any]: state => {
      state.loading = true;
    },
    [ActionTypes.CLEAR_CITIES_BY_COUNTRY_ID]: (state, action) => {
      return {
        ...state,
        cities: state.cities.filter(c => c.countryId !== action.payload),
      };
    },
    [ActionTypes.CLEAR_CITIES]: state => {
      return {
        ...state,
        cities: [],
      };
    },
    [ActionTypes.SET_THEME]: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
} as any);

export default SHARED_DATA_REDUCER;
