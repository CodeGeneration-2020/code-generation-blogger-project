import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import JobView from '../../components/Job/ViewJob';
import JobEdit from '../../components/Job/EditJob';
import { ActionCreators as JobAC } from '../../../store/job/actions';
import { ActionCreators as SharedAC } from '../../../store/sharedData/actions';
import { ActionCreators as CustomerAC } from '../../../store/customer/actions';
import { ActionCreators as FiltersAC } from '../../../store/filters/actions';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { PAGINATION } from 'consts/lists';
import BlueButton from '../../components/shared/BlueButton/button.component';
import Loader from '../../../loader/component/loader.component';
import * as Style from './styles';

const JobContainer = props => {
  const isOwner = true;
  const formRef = React.useRef<FormikValues>();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const saveJob = dataJob => {
    if (props.newJob) {
      props.history.push('/customer/profile/1');
      props.createJob({ dataJob, userId: 1 });
    } else {
      props.editJob({ dataJob, jobId: props.job._id });
    }
    props.toggleEditMode(false);
  };

  const setCountry = country => {
    if (formRef.current) {
      const values = formRef.current.values;
      formRef.current.setValues({
        ...values,
        countries: [...values.countries, country],
      });
      props.getCitiesByCountryId(country.value);
    }
  };

  const getCommentsPagination = (customerId, skip) => {
    props.getComments({
      customerId,
      skip,
      limit: PAGINATION.limit,
    });
    props.setSkip({
      key: 'customerComments',
      skip: skip + PAGINATION.limit,
    });
  };

  const initJobData = (jobId, customerId) => {
    props.toggleEditMode(false);
    props.resetSkip({ key: 'customerComments' });
    props.clearComments();
    props.getJobById(jobId);
    getCommentsPagination(customerId, 0);
  };

  useEffect(() => {
    if (props.newJob) {
      props.toggleEditMode(true);
    }
    if (props.match.params.jobId) {
      initJobData(props.match.params.jobId, props.match.params.customerId);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (props.jobFromList) {
      initJobData(props.jobFromList._id, props.jobFromList.customerId);
    }
    // eslint-disable-next-line
  }, [props.jobFromList]);

  return (
    <Style.JobCard>
      {props.loading && <Loader />}
      {props.editMode ? (
        <JobEdit
          getCitiesByCountryId={props.getCitiesByCountryId}
          setCountry={setCountry}
          innerRef={formRef}
          saveJob={saveJob}
          job={props.job}
          tags={props.tags}
          cities={props.cities}
          countries={props.countries}
          removeCityByCountryId={props.removeCityByCountryId}
        />
      ) : (
        !props.jobLoading && (
          <JobView
            isOwner={isOwner}
            job={props.job}
            comments={props.comments}
            averageScore={props.averageScore}
            loading={props.loading}
            createComment={(comment, score) => {
              props.createComment({
                customerId: props.job.customerId._id,
                comment,
                score,
              });
              props.setSkip({
                key: 'customerComments',
                skip: props.skip + 1,
              });
            }}
            getComments={() => {
              getCommentsPagination(props.job.customerId._id, props.skip);
            }}
          />
        )
      )}
      {isOwner && (
        <Style.Buttons>
          <BlueButton
            style={{ width: '87px', height: '32px', hover: false }}
            className={'edit'}
            onClick={
              props.editMode ? handleSubmit : () => props.toggleEditMode(true)
            }
          >
            <span>{props.editMode ? 'Save' : 'Edit'}</span>
          </BlueButton>
          <BlueButton
            style={{ width: '87px', height: '32px', hover: false }}
            className="close"
            onClick={() => {
              props.newJob || !props.editMode
                ? props.history.push('/customer/profile/1')
                : props.toggleEditMode(false);
            }}
          >
            <span>Close</span>
          </BlueButton>
        </Style.Buttons>
      )}
    </Style.JobCard>
  );
};

export default connect(
  (state: any) => {
    const {
      JOB_REDUCER,
      SHARED_DATA_REDUCER,
      FILTERS_REDUCER,
      CUSTOMER_REDUCER,
      LOADER_REDUCER,
    } = state;
    return {
      job: JOB_REDUCER.job,
      comments: CUSTOMER_REDUCER.customerComments,
      averageScore: CUSTOMER_REDUCER.averageScore,
      cities: SHARED_DATA_REDUCER.cities,
      countries: SHARED_DATA_REDUCER.countries,
      tags: SHARED_DATA_REDUCER.tags,
      editMode: JOB_REDUCER.editMode,
      loading: LOADER_REDUCER.isLoading,
      jobLoading: JOB_REDUCER.loading,
      skip: FILTERS_REDUCER.pagination.customerComments.skip,
    };
  },
  {
    getCountry: SharedAC.getCountry,
    getCitiesByCountryId: SharedAC.getCitiesByCountryId,
    removeCityByCountryId: SharedAC.clearCityByCountryId,
    getComments: CustomerAC.getCustomerComments,
    createComment: CustomerAC.createCommentForCustomer,
    clearComments: CustomerAC.clearComments,
    toggleEditMode: JobAC.toggleEditMode,
    getJobById: JobAC.getJobById,
    createJob: JobAC.createJob,
    editJob: JobAC.editJob,
    setSkip: FiltersAC.setSkip,
    resetSkip: FiltersAC.resetSkip,
  },
)(withRouter(JobContainer));
