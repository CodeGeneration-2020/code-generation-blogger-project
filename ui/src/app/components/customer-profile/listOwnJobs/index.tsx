import React from 'react';
import * as Style from './styles';
import JobCard from './job-card';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListJobs = props => {
  return (
    <Style.ListJobs>
      {props.jobs && (
        <InfiniteScroll
          dataLength={props.jobs.length}
          next={props.getJobsPagination}
          hasMore={true}
          loader={props.loading && <h4>Loading...</h4>}
        >
          {props.jobs.map(job => (
            <JobCard jobInfo={job} key={uuidv4()} />
          ))}
        </InfiniteScroll>
      )}
    </Style.ListJobs>
  );
};

export default ListJobs;
