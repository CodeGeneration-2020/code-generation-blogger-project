import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import JobService from '../../services/job.service';

const ActionTypes = {
  TOGGLE_EDIT_MODE: '[JOB] toggle_edit_mode',
  CREATE_JOB: '[JOB] create_new_job',
  EDIT_JOB_BY_ID: '[JOB] edit_job_by_id',
  GET_JOBS_BY_PAGINATION: '[JOB] get_jobs_pagination',
  GET_JOBS_BY_FILTERS: '[JOB] get_jobs_by_filters',
  GET_JOB_BY_ID: '[JOB] get_job_by_id',
};

const createJob = createAsyncThunk(
  ActionTypes.CREATE_JOB,
  async ({ dataJob, userId }: any) => {
    const response = await JobService.createJob(dataJob, userId);
    return response.data;
  },
);

const editJob = createAsyncThunk(
  ActionTypes.EDIT_JOB_BY_ID,
  async ({ dataJob, jobId }: any) => {
    const response = await JobService.editJob(dataJob, jobId);
    return response.data;
  },
);

const getJobsByPagination = createAsyncThunk(
  ActionTypes.GET_JOBS_BY_PAGINATION,
  async (data: { filters; skip: number }) => {
    const response = await JobService.getJobsByFilters(data.filters, data.skip);
    return response.data;
  },
);

const getJobsByFilters = createAsyncThunk(
  ActionTypes.GET_JOBS_BY_FILTERS,
  async filters => {
    const response = await JobService.getJobsByFilters(filters);
    return response.data;
  },
);

const getJobById = createAsyncThunk(ActionTypes.GET_JOB_BY_ID, async jobId => {
  const response = await JobService.getJobById(jobId);
  return response.data;
});

const toggleEditMode = createAction(ActionTypes.TOGGLE_EDIT_MODE);

const ActionCreators = {
  toggleEditMode,
  createJob,
  editJob,
  getJobsByFilters,
  getJobsByPagination,
  getJobById,
};

export { ActionTypes, ActionCreators };
