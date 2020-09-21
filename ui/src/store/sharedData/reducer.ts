import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators } from './actions';

const initialState = {
  tags: [],
  countries: [],
  cities: [],
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
        value: country._id,
        label: country.name,
      }));
    },
    [ActionCreators.getCountry.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getCity.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.cities = action.payload.map(city => ({
        value: city._id,
        label: city.name,
      }));
    },
    [ActionCreators.getCity.pending as any]: state => {
      state.loading = true;
    },
  },
} as any);

export default SHARED_DATA_REDUCER;
