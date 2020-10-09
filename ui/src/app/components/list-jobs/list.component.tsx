import React from 'react';
import { connect } from 'react-redux';
import * as Styled from './list.styles';
import { ActionCreators } from '../../../store/job/actions';
import SideBar, { openSlideMenu } from '../sidebar/SideBar';
import { v4 as uuidv4 } from 'uuid';
import JobContainer from '../../containers/JobContainer';
import JobCard from './job-card';
import Loader from '../../../loader/component/loader.component';

const ListJob = ({ getAllJobs, jobs, loading }) => {
  const [jobId, setJobId] = React.useState<string>();

  const openSideBar = (e, id: string) => {
    e.preventDefault();
    setJobId(id);
    openSlideMenu();
  };

  React.useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Styled.ListJobsContainer>
          {jobs.map(job => (
            <JobCard
              openSideBar={openSideBar}
              id={job._id}
              title={job.title}
              budget={job.budget}
              location={job.location}
              tags={job.tags}
              key={uuidv4()}
            />
          ))}
        </Styled.ListJobsContainer>
      )}
      <SideBar>
        <JobContainer jobId={jobId} />
      </SideBar>
    </>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER, LOADER_REDUCER } = state;
    return {
      jobs: JOB_REDUCER.listJobs,
      loading: LOADER_REDUCER.loading,
    };
  },
  {
    getAllJobs: ActionCreators.getAllJobs,
  },
)(ListJob);
