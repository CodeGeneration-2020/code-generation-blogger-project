import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Styled from './job.styles';
import { ActionCreators } from '../../../store/job/actions';
import { ActionCreators as TagsAC } from '../../../store/tags/actions';
import { v4 as uuidv4 } from 'uuid';
import Select from 'react-select';

const Job: React.FC<{
  match?: any;
  currentJobId?: number;
  editMode: any;
  job: any;
  setTitle: any;
  setBudget: any;
  setDescription: any;
  setPhone: any;
  setEmail: any;
  setAdditionalContacts: any;
  setCountry: any;
  setCity: any;
  setTags: any;
  toggleEditMode: any;
  createJob: any;
  editJob: any;
  getJobById: any;
  getTags: any;
  newJob?: boolean;
  tags: any;
}> = ({
  getTags,
  editMode,
  job,
  setTitle,
  setBudget,
  setDescription,
  setPhone,
  setEmail,
  setAdditionalContacts,
  setCountry,
  setCity,
  setTags,
  toggleEditMode,
  createJob,
  editJob,
  getJobById,
  match,
  currentJobId,
  newJob,
  tags,
}) => {
  const [readonly, setReadonly] = React.useState(true);

  useEffect(() => {
    if (newJob) {
      toggleEditMode('on');
      setReadonly(false);
    }
    getTags();
    // eslint-disable-next-line
  },[]);

  useEffect(() => {
    const id = match ? match.params.id : currentJobId;
    if (id) {
      getJobById(id);
    }
    // eslint-disable-next-line
  }, [match, currentJobId]);

  const saveJob = () => {
    toggleEditMode('off');
    if (newJob) {
      createJob({ job, userId: 1 });
    } else {
      editJob(job);
    }
  };

  return (
    <Styled.JobContainer>
      <Styled.JobHeader>
        <Styled.Description>
          <div className="title">
            Title:
            {editMode ? (
              <input
                onChange={e => setTitle(e.currentTarget.value)}
                defaultValue={job.title}
              />
            ) : (
              job.title
            )}
          </div>
          <div className="budget">
            Budget:
            {editMode ? (
              <input
                onChange={e => setBudget(e.currentTarget.value)}
                defaultValue={job.budget}
              />
            ) : (
              job.budget
            )}
          </div>
          <div className="short-description">
            Description:
            {editMode ? (
              <input
                onChange={e => setDescription(e.currentTarget.value)}
                defaultValue={job.description}
              />
            ) : (
              job.description
            )}
          </div>
        </Styled.Description>
        <Styled.Tags>
          {editMode
            ? tags.length > 0 && (
                <>
                  TAGS:
                  <Select
                    isMulti
                    options={tags}
                    defaultValue={job.tags}
                    onChange={tag => {
                      setTags(tag);
                    }}
                  />
                </>
              )
            : job.tags.map(tag => <div key={uuidv4()}>{tag.label}</div>)}
        </Styled.Tags>
      </Styled.JobHeader>
      <Styled.Contact>
        <div>How to contact:</div>
        <div className="phone">
          phone:
          {editMode ? (
            <input
              onChange={e => setPhone(e.currentTarget.value)}
              defaultValue={job.contact.phone}
            />
          ) : (
            job.contact.phone
          )}
        </div>
        <div className="email">
          email:
          {editMode ? (
            <input
              onChange={e => setEmail(e.currentTarget.value)}
              defaultValue={job.contact.email}
            />
          ) : (
            job.contact.email
          )}
        </div>
      </Styled.Contact>
      <Styled.AdditionalContact>
        <div>Additional Contacts</div>
        <div className="contact">
          {editMode ? (
            <textarea
              onChange={e => setAdditionalContacts(e.currentTarget.value)}
              defaultValue={job.additional_contacts}
            />
          ) : (
            job.additional_contacts
          )}
        </div>
      </Styled.AdditionalContact>
      <Styled.Location>
        Location:
        <div className="country">
          country:
          {editMode ? (
            <input
              onChange={e => setCountry(e.currentTarget.value)}
              defaultValue={job.location.country}
            />
          ) : (
            job.location.country
          )}
        </div>
        <div className="city">
          city:
          {editMode ? (
            <input
              onChange={e => setCity(e.currentTarget.value)}
              defaultValue={job.location.city}
            />
          ) : (
            job.location.city
          )}
        </div>
      </Styled.Location>
      <Styled.Attachments>
        <div>Attachments +</div>
        {editMode ? (
          <input type="file" />
        ) : (
          <div>
            {job.attachments.map(file => (
              <div key={uuidv4()}>{file}</div>
            ))}
          </div>
        )}
      </Styled.Attachments>
      {!readonly && (
        <Styled.Buttons>
          {editMode ? (
            <button className="save" onClick={() => saveJob()}>
              Save
            </button>
          ) : (
            <button className="edit" onClick={() => toggleEditMode('on')}>
              Edit
            </button>
          )}
          <button className="close" onClick={() => toggleEditMode('break')}>
            Close
          </button>
        </Styled.Buttons>
      )}
    </Styled.JobContainer>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER, TAGS_REDUCER } = state;
    return {
      job: JOB_REDUCER.job,
      tags: TAGS_REDUCER.tags,
      editMode: JOB_REDUCER.editMode.status,
    };
  },
  {
    setTitle: ActionCreators.setTitle,
    setBudget: ActionCreators.setBudget,
    setDescription: ActionCreators.setDescription,
    setPhone: ActionCreators.setPhone,
    setEmail: ActionCreators.setEmail,
    setAdditionalContacts: ActionCreators.setAdditionalContacts,
    setCountry: ActionCreators.setCountry,
    setCity: ActionCreators.setCity,
    setTags: ActionCreators.setTags,
    toggleEditMode: ActionCreators.toggleEditMode,
    createJob: ActionCreators.createJob,
    editJob: ActionCreators.editJob,
    getJobById: ActionCreators.getJobById,
    getTags: TagsAC.getTags,
  },
)(Job);
