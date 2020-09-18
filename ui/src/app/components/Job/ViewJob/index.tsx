import React from 'react';
import { connect } from 'react-redux';
import * as Styled from '../job.styles';
import { ActionCreators } from '../../../../store/job/actions';
import { v4 as uuidv4 } from 'uuid';
import { IJob } from '../../../../types';

const Job: React.FC<{
  job: IJob;
  loading: boolean;
  toggleMode: any;
}> = ({ job, loading, toggleMode }) => {
  const isOwner = true;

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Styled.JobContainer>
      <Styled.JobHeader>
        <Styled.Description>
          <div className="title">{job.title}</div>
          <div className="budget">Budget:{job.budget}</div>
          <div className="short-description">
            Description:
            {job.description}
          </div>
        </Styled.Description>
        <Styled.Tags>
          {job.tags.map(tag => (
            <div key={uuidv4()}>{tag.label}</div>
          ))}
        </Styled.Tags>
      </Styled.JobHeader>
      <Styled.Contact>
        <div>How to contact:</div>
        <div className="phone">phone:{job.contact.phone}</div>
        <div className="email">email:{job.contact.email}</div>
      </Styled.Contact>
      <Styled.AdditionalContact>
        <div>Additional Contacts</div>
        <div className="contact">{job.additional_contacts}</div>
      </Styled.AdditionalContact>
      <Styled.Location>
        Location:
        <div className="country">
          country:
          <span>
            {job.location.countries.map(c => (
              <span key={uuidv4()}>{c.label},</span>
            ))}
          </span>
        </div>
        <div className="city">
          city:
          <span>
            {job.location.cities.map(c => (
              <span key={uuidv4()}>{c.label},</span>
            ))}
          </span>
        </div>
      </Styled.Location>
      <Styled.Attachments>
        <div>Attachments +</div>
        <div>
          {job.attachments.map(file => (
            <div key={uuidv4()}>{file}</div>
          ))}
        </div>
      </Styled.Attachments>
      {isOwner && (
        <Styled.Buttons>
          <button className="edit" onClick={() => toggleMode(true)}>
            Edit
          </button>
          <button className="close">Close</button>
        </Styled.Buttons>
      )}
    </Styled.JobContainer>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER } = state;
    return {
      job: JOB_REDUCER.job,
      loading: JOB_REDUCER.loading,
    };
  },
  {
    getJobById: ActionCreators.getJobById,
  },
)(Job);
