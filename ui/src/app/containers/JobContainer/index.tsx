import React, { useEffect } from 'react';
import JobView from '../../components/Job/ViewJob';
import JobEdit from '../../components/Job/EditJob';
import { ActionCreators as JobAC } from '../../../store/job/actions';
import { ActionCreators } from '../../../store/sharedData/actions';
import { connect } from 'react-redux';

const JobContainer = props => {
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

  const Job = props.editMode ? JobEdit : JobView;

  return (
    <>
      {props.loading ? (
        <div>...Loading</div>
      ) : (
        <Job toggleMode={props.toggleEditMode} newJob={props.newJob} />
      )}
    </>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER } = state;
    return {
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
  },
)(JobContainer);
