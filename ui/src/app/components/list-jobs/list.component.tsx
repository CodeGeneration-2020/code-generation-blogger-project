import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink
              to={'/job/details/' + job._id}
              key={uuidv4()}
              onClick={e => {
                openSideBar(e, job._id);
              }}
            >
              <JobCard
                title={job.title}
                budget={job.budget}
                location={job.location}
                tags={job.tags}
              />
              {/* <Styled.JobCard>
                <div className="description">
                  <div className="title">{job.title}</div>
                  <div className="budget">{job.budget}</div>
                  <div className="location">
                    <div>Предпочтительная локация:</div>
                    <span className="country">
                      {job.location.countries.map(c => (
                        <span key={uuidv4()}>{c.label},</span>
                      ))}
                    </span>
                    <div className="city">
                      {job.location.cities.map(c => (
                        <span key={uuidv4()}>{c.label},</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tags">
                  {job.tags.map(tag => (
                    <div className="tag" key={uuidv4()}>
                      {tag.label}
                    </div>
                  ))}
                </div>
              </Styled.JobCard> */}
            </NavLink>
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
