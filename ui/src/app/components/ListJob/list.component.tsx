import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Styled from './list.styles';
import { ActionCreators } from '../../../store/job/actions';
import SideBar, { openSlideMenu } from '../sidebar/SideBar';
import Job from '../Job/job.component';
import { v4 as uuidv4 } from 'uuid';

const ListJob = ({ getAllJobs, jobs, loading }) => {
  const [jobId, toggleJobId] = React.useState<number>();

  const openSideBar = (e, id: number) => {
    e.preventDefault();
    toggleJobId(id);
    openSlideMenu();
  };

  React.useEffect(() => {
    getAllJobs();
  }, [getAllJobs]);

  return (
    <>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <Styled.ListJobsContainer>
          {jobs.map(job => (
            <NavLink
              to={'/job/details/' + job._id}
              key={uuidv4()}
              onClick={e => {
                openSideBar(e, job._id);
              }}
            >
              <Styled.JobCard>
                <div className="description">
                  <div className="title">{job.title}</div>
                  <div className="budget">{job.budget}</div>
                  <div className="location">
                    <div>Предпочтительная локация:</div>
                    <span className="country">{job.location.country},</span>
                    <span className="city">{job.location.city}</span>
                  </div>
                </div>
                <div className="tags">
                  {job.tags.map(tag => (
                    <div className="tag" key={uuidv4()}>
                      {tag}
                    </div>
                  ))}
                </div>
              </Styled.JobCard>
            </NavLink>
          ))}
        </Styled.ListJobsContainer>
      )}
      <SideBar>
        <Job currentJobId={jobId} />
      </SideBar>
    </>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER } = state;
    return {
      jobs: JOB_REDUCER.listJobs,
      loading: JOB_REDUCER.loading,
    };
  },
  {
    getAllJobs: ActionCreators.getAllJobs,
  },
)(ListJob);
