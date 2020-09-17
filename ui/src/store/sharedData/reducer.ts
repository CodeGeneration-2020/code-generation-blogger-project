import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators } from './actions';

const initialState = {
  tags: [],
  country: [],
  city: [],
};

const SHARED_DATA_REDUCER = createSlice({
  name: 'SHARED_DATA_REDUCER',
  initialState,
  extraReducers: {
    [ActionCreators.getTags.fulfilled as any]: (state, action) => {
      state.tags = action.payload.map(t => ({ value: t._id, label: t.tag }));
    },
    [ActionCreators.getCountry.fulfilled as any]: (state, action) => {
      state.country = action.payload.map(country => ({
        value: country._id,
        label: country.name,
      }));
    },
    [ActionCreators.getCity.fulfilled as any]: (state, action) => {
      state.city = action.payload.map(city => ({
        value: city._id,
        label: city.name,
      }));
    },
  },
} as any);

export default SHARED_DATA_REDUCER;
