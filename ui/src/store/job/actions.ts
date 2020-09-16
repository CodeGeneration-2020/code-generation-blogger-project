import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import JobService from '../../services/job.service';

const ActionTypes = {
  SET_TITLE_JOB: '[JOB] set_title_job',
  SET_BUDGET_JOB: '[JOB] set_budget_job',
  TOGGLE_EDIT_MODE: '[JOB] toggle_edit_mode',
  SET_DESCRIPTION: '[JOB] set_description',
  SET_PHONE: '[JOB] set_phone',
  SET_EMAIL: '[JOB] set_email',
  SET_ADDITIONAL_CONTACTS: '[JOB] set_additional_contacts',
  SET_COUNTRY: '[JOB] set_country',
  SET_CITY: '[JOB] set_city',
  CREATE_JOB: '[JOB] create_new_job',
  EDIT_JOB_BY_ID: '[JOB] edit_job_by_id',
  GET_ALL_JOBS: '[JOB] get_all_jobs',
  GET_JOB_BY_ID: '[JOB] get_job_by_id',
  SET_TAGS: '[JOB] set_tags',
};

const createJob = createAsyncThunk(
  ActionTypes.CREATE_JOB,
  async ({ job, userId }: any) => {
    const response = await JobService.createJob(job, userId);
    return response.data;
  },
);

const editJob = createAsyncThunk(ActionTypes.EDIT_JOB_BY_ID, async job => {
  const response = await JobService.editJob(job);
  return response.data;
});

const getAllJobs = createAsyncThunk(ActionTypes.GET_ALL_JOBS, async () => {
  const response = await JobService.getAllJobs();
  return response.data;
});

const getJobById = createAsyncThunk(ActionTypes.GET_JOB_BY_ID, async jobId => {
  const response = await JobService.getJobById(jobId);
  return response.data;
});

const setTitle = createAction(ActionTypes.SET_TITLE_JOB);
const setBudget = createAction(ActionTypes.SET_BUDGET_JOB);
const setDescription = createAction(ActionTypes.SET_DESCRIPTION);
const setPhone = createAction(ActionTypes.SET_PHONE);
const setEmail = createAction(ActionTypes.SET_EMAIL);
const setAdditionalContacts = createAction(ActionTypes.SET_ADDITIONAL_CONTACTS);
const setCountry = createAction(ActionTypes.SET_COUNTRY);
const setCity = createAction(ActionTypes.SET_CITY);
const toggleEditMode = createAction(ActionTypes.TOGGLE_EDIT_MODE);
const setTags = createAction(ActionTypes.SET_TAGS);

const ActionCreators = {
  setTitle,
  setBudget,
  toggleEditMode,
  setDescription,
  setPhone,
  setEmail,
  setAdditionalContacts,
  setCountry,
  setCity,
  createJob,
  editJob,
  getAllJobs,
  getJobById,
  setTags,
};

export { ActionTypes, ActionCreators };
