import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import JobService from '../../services/job.service';

const ActionTypes = {
  TOGGLE_EDIT_MODE: '[JOB] toggle_edit_mode',
  CREATE_JOB: '[JOB] create_new_job',
  EDIT_JOB_BY_ID: '[JOB] edit_job_by_id',
  GET_ALL_JOBS: '[JOB] get_all_jobs',
  GET_JOB_BY_ID: '[JOB] get_job_by_id',
  GET_JOB_BY_CUSTOMER_ID: '[JOB] get_job_by_customer_id',
  CLEAR_CURRENT_CUSTOMER_JOBS: '[JOB] clear_current_customer_jobs',
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

const getAllJobs = createAsyncThunk(ActionTypes.GET_ALL_JOBS, async () => {
  const response = await JobService.getAllJobs();
  return response.data;
});

const getJobById = createAsyncThunk(ActionTypes.GET_JOB_BY_ID, async jobId => {
  const response = await JobService.getJobById(jobId);
  return response.data;
});

const getJobsByCustomerId = createAsyncThunk(
  ActionTypes.GET_JOB_BY_CUSTOMER_ID,
  async (data: { customerId: number; skip: number; limit: number }) => {
    const response = await JobService.getJobsByCustomerId(
      data.customerId,
      data.skip,
      data.limit,
    );
    return response.data;
  },
);

const toggleEditMode = createAction(ActionTypes.TOGGLE_EDIT_MODE);
const clearCurrentCustomerJobs = createAction(
  ActionTypes.CLEAR_CURRENT_CUSTOMER_JOBS,
);

const ActionCreators = {
  toggleEditMode,
  createJob,
  editJob,
  getAllJobs,
  getJobById,
  getJobsByCustomerId,
  clearCurrentCustomerJobs,
};

export { ActionTypes, ActionCreators };
