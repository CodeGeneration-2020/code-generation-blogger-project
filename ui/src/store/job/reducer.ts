import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators } from './actions';

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
      country: '',
      city: '',
    },
    attachments: [],
  },
  editMode: {
    status: false,
    prevState: undefined,
  },
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
    [ActionCreators.setTitle as any]: (state, action) => {
      state.job.title = action.payload;
    },
    [ActionCreators.setBudget as any]: (state, action) => {
      state.job.budget = action.payload;
    },
    [ActionCreators.setDescription as any]: (state, action) => {
      state.job.description = action.payload;
    },
    [ActionCreators.setPhone as any]: (state, action) => {
      state.job.contact.phone = action.payload;
    },
    [ActionCreators.setEmail as any]: (state, action) => {
      state.job.contact.email = action.payload;
    },
    [ActionCreators.setAdditionalContacts as any]: (state, action) => {
      state.job.additional_contacts = action.payload;
    },
    [ActionCreators.toggleEditMode as any]: (state, action) => {
      if (action.payload === 'on') {
        state.editMode.prevState = state.job;
        state.editMode.status = true;
      }
      if (action.payload === 'off') {
        state.editMode.prevState = undefined;
        state.editMode.status = false;
      }
      if (action.payload === 'break' && state.editMode.status) {
        state.job = state.editMode.prevState;
        state.editMode.prevState = undefined;
        state.editMode.status = false;
      }
    },
    [ActionCreators.setCountry as any]: (state, action) => {
      state.job.location.country = action.payload;
    },
    [ActionCreators.setCity as any]: (state, action) => {
      state.job.location.city = action.payload;
    },
  },
} as any);

export default JOB_REDUCER;
