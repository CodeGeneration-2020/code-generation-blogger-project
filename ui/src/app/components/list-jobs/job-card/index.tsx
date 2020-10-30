import React from 'react';
import * as Style from './styles';
import { v4 as uuidv4 } from 'uuid';
import ScrollItems from '../../shared/scroll-tags';
import { NavLink } from 'react-router-dom';
import { ILocation, IOption, ITheme } from '../../../../types';
import withTheme from '../../../../HOC/withTheme';

const JobCard: React.FC<{
  title: string;
  budget: number;
  location: ILocation;
  tags: IOption[];
  jobId: number;
  customerId: number;
  openSideBar;
  theme?: ITheme;
}> = ({
  title,
  budget,
  location,
  tags,
  jobId,
  customerId,
  openSideBar,
  theme,
}) => {
  return (
    <Style.JobCardContainer theme={theme}>
      <NavLink
        className="job-info"
        to={`/job/details/${jobId}/${customerId}`}
        key={uuidv4()}
        onClick={e => {
          openSideBar(e, jobId);
        }}
      >
        <div className="short-title">{title}</div>
        <div className="budget">
          <div className="text">Budget</div>
          <div className="sum">{budget}$</div>
        </div>
      </NavLink>
      <div className="location">
        <div className="country">
          {location && (
            <ScrollItems tags={location.countries} className="item" />
          )}
        </div>
        <div className="city">
          {location && (
            <ScrollItems
              tags={location.cities}
              scroll={'auto'}
              className="item"
            />
          )}
        </div>
      </div>
      <div className="tags">
        {tags && <ScrollItems tags={tags} scroll={'auto'} className="item" />}
      </div>
    </Style.JobCardContainer>
  );
};

export default withTheme(JobCard);
