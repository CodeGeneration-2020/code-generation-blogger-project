import React from 'react';
import * as Style from './styles';
import { v4 as uuidv4 } from 'uuid';
import Tag from '../../shared/Tag';
import { NavLink } from 'react-router-dom';
import { ILocation, IOption } from '../../../../types';

const JobCard: React.FC<{
  title: string;
  budget: number;
  location: ILocation;
  tags: IOption[];
  jobId: number;
  customerId: number;
  openSideBar;
}> = ({ title, budget, location, tags, jobId, customerId, openSideBar }) => {
  return (
    <Style.JobCardContainer>
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
          {location.countries.map(c => (
            <Tag key={uuidv4()} title={c.label} className="item" />
          ))}
        </div>
        <div className="city">
          {location.cities.map(c => (
            <Tag key={uuidv4()} title={c.label} className="item" />
          ))}
        </div>
      </div>
      <div className="tags">
        <div className="list-tags">
          {tags &&
            tags.map((tag, i) => (
              <Tag key={i} title={tag.label} className={'item'} />
            ))}
        </div>
      </div>
    </Style.JobCardContainer>
  );
};

export default JobCard;
