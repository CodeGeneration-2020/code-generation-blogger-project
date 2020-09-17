import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  listJobs: [],
  job: {
    title: '',
    budget: '',
    description: '',
    tags: [],
    contact: {
      phone: '',
      email: '',
    },
    additional_contacts: '',
    location: {
      countries: [],
      cities: [],
    },
    attachments: [],
    _id: '',
    customerId: {},
  },
  editMode: false,
  loading: false,
};

const JOB_REDUCER = createSlice({
  name: 'JOB_REDUCER',
  initialState,
  extraReducers: {
    [ActionCreators.getJobById.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getJobById.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.job = action.payload;
    },
    [ActionCreators.getJobById.rejected as any]: state => {
      state.loading = false;
    },
    [ActionCreators.getAllJobs.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getAllJobs.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.listJobs = action.payload;
    },
    [ActionCreators.getAllJobs.rejected as any]: state => {
      state.loading = false;
    },
    [ActionTypes.TOGGLE_EDIT_MODE]: (state, action) => {
      return {
        ...state,
        editMode: action.payload,
      };
    },
  },
} as any);

export default JOB_REDUCER;
