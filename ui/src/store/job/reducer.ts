import { createSlice } from '@reduxjs/toolkit';
import { JOBINIT } from 'consts/lists';
import { ActionCreators, ActionTypes } from './actions';

const initialState = {
  listJobs: [],
  currentCustomerJobs: [],
  job: JOBINIT,
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
    [ActionCreators.getJobsByCustomerId.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.getJobsByCustomerId.fulfilled as any]: (state, action) => {
      state.currentCustomerJobs = state.currentCustomerJobs.concat(
        action.payload,
      );
      state.loading = false;
    },
    [ActionCreators.getJobsByCustomerId.rejected as any]: state => {
      state.loading = false;
    },
    [ActionTypes.CLEAR_CURRENT_CUSTOMER_JOBS]: state => {
      return {
        ...state,
        currentCustomerJobs: [],
        job: JOBINIT,
      };
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
    [ActionCreators.editJob.pending as any]: state => {
      state.loading = true;
    },
    [ActionCreators.editJob.fulfilled as any]: (state, action) => {
      state.job = action.payload;
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
