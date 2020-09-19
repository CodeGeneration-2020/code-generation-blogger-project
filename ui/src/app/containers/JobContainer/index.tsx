import React, { useEffect } from 'react';
import JobView from '../../components/Job/ViewJob';
import JobEdit from '../../components/Job/EditJob';
import { ActionCreators as JobAC } from '../../../store/job/actions';
import { ActionCreators } from '../../../store/sharedData/actions';
import { connect } from 'react-redux';
import { Buttons } from '../../components/Job/job.styles';

const JobContainer = props => {
  const isOwner = true;

  let submitMyForm: any;

  const handleSubmitMyForm = e => {
    if (submitMyForm) {
      submitMyForm(e);
    }
  };

  const bindSubmitForm = submitForm => {
    submitMyForm = submitForm;
  };

  useEffect(() => {
    if (props.newJob) {
      props.toggleEditMode(true);
    }

    props.getTags();
    props.getCountry();
    props.getCity();
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    const id = props.match ? props.match.params.id : props.jobId;
    if (id) {
      props.getJobById(id);
    }
    // eslint-disable-next-line
  }, [props.match, props.jobId]);

  return (
    <>
      {props.loading ? (
        <div>...Loading</div>
      ) : (
        <>
          {props.editMode ? (
            <>
              <JobEdit
                newJob={props.newJob}
                job={props.job}
                tags={props.tags}
                cities={props.cities}
                countries={props.countries}
                createJob={props.createJob}
                editJob={props.editJob}
                bindSubmitForm={bindSubmitForm}
                callBack={() => props.toggleEditMode(false)}
              />
              <Buttons>
                <button
                  className="save"
                  type="submit"
                  onClick={handleSubmitMyForm}
                >
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
              <JobView job={props.job} />
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
      )}
    </>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER, SHARED_DATA_REDUCER } = state;
    return {
      job: JOB_REDUCER.job,
      cities: SHARED_DATA_REDUCER.cities,
      countries: SHARED_DATA_REDUCER.countries,
      tags: SHARED_DATA_REDUCER.tags,
      editMode: JOB_REDUCER.editMode,
      loading: JOB_REDUCER.loading,
    };
  },
  {
    getTags: ActionCreators.getTags,
    getCountry: ActionCreators.getCountry,
    getCity: ActionCreators.getCity,
    toggleEditMode: JobAC.toggleEditMode,
    getJobById: JobAC.getJobById,
    createJob: JobAC.createJob,
    editJob: JobAC.editJob,
  },
)(JobContainer);
