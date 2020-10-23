import React from 'react';
import * as Style from './styles';
import withTheme from '../../../../../HOC/withTheme';
import { useHistory } from 'react-router-dom';
import BlueButton from '../../../shared/BlueButton/button.component';
import { v4 as uuidv4 } from 'uuid';
import Tag from '../../../shared/Tag';

const JobCard: React.FC<{ theme?; jobInfo; resetSkip }> = ({
  theme,
  jobInfo,
  resetSkip,
}) => {
  const history = useHistory();
  return (
    <Style.JobCardContainer theme={theme}>
      <div className="title">{jobInfo.title}</div>
      <div className="budget">
        <span className="sum">{jobInfo.budget}$</span>
        <span className="text">Budget</span>
      </div>
      <div className="tags">
        <div className="list">
          {jobInfo.tags.map(t => (
            <Tag title={t.label} className="item" key={uuidv4()} />
          ))}
        </div>
      </div>
      <div className="location">
        <div className="countries">
          {jobInfo.location.countries.map(c => (
            <Tag title={c.label} className="item" key={uuidv4()} />
          ))}
        </div>
        <div className="cities">
          <div className="list">
            {jobInfo.location.cities.map(c => (
              <Tag title={c.label} className="item" key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>
      <BlueButton
        onClick={() => {
          history.push(`/job/details/${jobInfo._id}/${jobInfo.customerId}`);
          resetSkip();
        }}
        className="view-button"
        style={{ width: '105px', height: '54px', hover: false }}
      >
        <span className="text">View</span>
      </BlueButton>
    </Style.JobCardContainer>
  );
};

export default withTheme(JobCard);
