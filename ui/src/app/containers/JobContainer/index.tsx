import React, { useEffect } from 'react';
import JobView from '../../components/Job/ViewJob';
import JobEdit from '../../components/Job/EditJob';
import { ActionCreators as JobAC } from '../../../store/job/actions';
import { ActionCreators as SharedAC } from '../../../store/sharedData/actions';
import { ActionCreators as CustomerAC } from '../../../store/customer/actions';
import { ActionCreators as FiltersAC } from '../../../store/filters/actions';
import { connect } from 'react-redux';
import { Buttons } from '../../components/Job/job.styles';
import { FormikValues } from 'formik';
import { PAGINATION } from 'consts/lists';
import Loader from '../../../loader/component/loader.component';

const JobContainer = props => {
  const isOwner = !true;
  const formRef = React.useRef<FormikValues>();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
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
    props.getJobById(jobId);
    props.resetSkip({ key: 'customerComments' });
    props.clearComments();
    getCommentsPagination(customerId, 0);
  };

  const initSharedData = () => {
    props.getTags();
    props.getCountry();
    props.getCity();
  };

  useEffect(() => {
    if (props.newJob) {
      props.toggleEditMode(true);
    }
    if (props.match) {
      initJobData(props.match.params.jobId, props.match.params.customerId);
    }
    initSharedData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (props.jobFromList) {
      initJobData(props.jobFromList._id, props.jobFromList.customerId);
    }
    // eslint-disable-next-line
  }, [props.jobFromList]);

  return (
    <>
      {props.loading && <Loader />}
      {props.editMode ? (
        <>
          <JobEdit
            innerRef={formRef}
            newJob={props.newJob}
            job={props.job}
            tags={props.tags}
            cities={props.cities}
            countries={props.countries}
            createJob={props.createJob}
            editJob={props.editJob}
            callBack={() => props.toggleEditMode(false)}
          />
          <Buttons>
            <button className="save" type="submit" onClick={handleSubmit}>
              Save
            </button>

            <button
              className="close"
              onClick={() => props.toggleEditMode(false)}
            >
              Close
            </button>
          </Buttons>
        </>
      ) : (
        <>
          {!props.jobLoading && (
            <JobView
              job={props.job}
              comments={props.comments}
              loading={props.loading}
              createComment={comment => {
                props.createComment({
                  customerId: props.job.customerId._id,
                  comment,
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
          )}
          )
          {isOwner && (
            <Buttons>
              <button
                className="edit"
                onClick={() => props.toggleEditMode(true)}
              >
                Edit
              </button>

              <button className="close">Close</button>
            </Buttons>
          )}
        </>
      )}
    </>
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
    getTags: SharedAC.getTags,
    getCountry: SharedAC.getCountry,
    getCity: SharedAC.getCity,
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
)(JobContainer);
