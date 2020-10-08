import React from 'react';
import * as Style from './styles';
import { reduceNumber } from '../../../helpers/reduceNumber';
import { v4 as uuidv4 } from 'uuid';
import Tag from '../../shared/Tag';

const trimStringByCount = (str, count = 10) => {
  if (str.length >= count) {
    return str.slice(0, count) + '...';
  }
  return str;
};

const JobCard = ({ title, budget, location, tags }) => {
  return (
    <Style.JobCardContainer>
      <div className="short-title">
        <p>Short title about the job</p>
      </div>
      <div className="budget">
        <div className="sum">
          {reduceNumber(budget).value + reduceNumber(budget).unit}$
        </div>
        <div className="text">Budget</div>
      </div>
      <div className="location">
        <div className="country">
          {location.countries.map(c => (
            <Tag key={uuidv4()} title={c.label} className="tag" />
          ))}
        </div>
        <div className="city">
          {location.cities.map(c => (
            <Tag key={uuidv4()} title={c.label} className="tag" />
          ))}
        </div>
      </div>
      <div className="tags">
        <div className="first-line">
          {tags &&
            tags.map((tag, i) => {
              if (i < 2) {
                return (
                  <Tag
                    key={i}
                    title={trimStringByCount(tag.label)}
                    className={'tag'}
                  />
                );
              }
              return null;
            })}
        </div>
        <div className="second-line">
          {tags &&
            tags.map((tag, i) => {
              if (i > 1 && i < 5) {
                return (
                  <Tag
                    key={i}
                    title={trimStringByCount(tag.label)}
                    className={'tag'}
                  />
                );
              }
              return null;
            })}
        </div>
      </div>
    </Style.JobCardContainer>
  );
};

export default JobCard;
