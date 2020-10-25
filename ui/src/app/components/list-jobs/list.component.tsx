import React from 'react';
import { connect } from 'react-redux';
import * as Styled from './list.styles';
import { ActionCreators as JobsCreators } from '../../../store/job/actions';
import SideBar, { openSlideMenu } from '../sidebar/SideBar';
import { v4 as uuidv4 } from 'uuid';
import UsersFiltersContainer from '../../containers/UsersFiltersContainer/UsersFilters';
import JobContainer from '../../containers/JobContainer';
import JobCard from './job-card';
import Loader from '../../../loader/component/loader.component';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ActionCreators as FiltersActions } from '../../../store/filters/actions';
import { PAGINATION, SKIP } from '../../../consts/lists';

const ListJob = ({ getJobs, setSkip, jobs, filters, skip, loading }) => {
  const [jobId, setJobId] = React.useState<string>();
  const openSideBar = (e, id: string) => {
    e.preventDefault();
    setJobId(id);
    openSlideMenu();
  };

  const getJobsPagination = () => {
    getJobs({
      filters,
      skip: skip + PAGINATION.limit,
      limit: PAGINATION.limit,
    });
    setSkip({ key: SKIP.jobs, skip: skip + PAGINATION.limit });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Styled.ListJobsContainer>
          <UsersFiltersContainer />
          <InfiniteScroll
            dataLength={jobs.length}
            next={() => getJobsPagination()}
            hasMore={true}
            loader={loading && <h4>Loading...</h4>}
          >
            {jobs.map(job => (
              <JobCard
                openSideBar={openSideBar}
                jobId={job._id}
                customerId={job.customerId}
                title={job.title}
                budget={job.budget}
                location={job.location}
                tags={job.tags}
                key={uuidv4()}
              />
            ))}
          </InfiniteScroll>
        </Styled.ListJobsContainer>
      )}
      <SideBar>
        {jobId && (
          <JobContainer jobFromList={jobs.find(e => e._id === jobId)} />
        )}
      </SideBar>
    </>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER, LOADER_REDUCER, FILTERS_REDUCER } = state;
    return {
      jobs: JOB_REDUCER.listJobs,
      loading: LOADER_REDUCER.loading,
      filters: FILTERS_REDUCER.filters,
      skip: FILTERS_REDUCER.pagination.jobs.skip,
    };
  },
  {
    getJobs: JobsCreators.getJobsByPagination,
    setSkip: FiltersActions.setSkip,
  },
)(ListJob);
