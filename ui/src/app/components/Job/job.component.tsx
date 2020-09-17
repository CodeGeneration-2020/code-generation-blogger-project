import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Styled from './job.styles';
import { ActionCreators } from '../../../store/job/actions';
import { ActionCreators as SharedDataAC } from '../../../store/sharedData/actions';
import { v4 as uuidv4 } from 'uuid';
import { jobFormSchema } from '../../helpers/validation';
import Input from '../shared/Input/input.commponent';
import Textarea from '../shared/Textarea/textarea.component';
import FormikSelect from '../shared/FormikSelect/formik-select.component';
import { ILocation, ITags, IJob } from '../../../types';

const Job: React.FC<{
  toggleEditMode: any;
  createJob: any;
  editJob: any;
  getJobById: any;
  getTags: any;
  getCountry: any;
  getCity: any;
  editMode: any;
  match?: any;
  job: IJob;
  currentJobId?: string;
  newJob?: boolean;
  tags: ITags[];
  countries: ILocation;
  cities: ILocation;
  loading: boolean;
}> = ({
  getTags,
  getCountry,
  getCity,
  editMode,
  job,
  toggleEditMode,
  createJob,
  editJob,
  getJobById,
  match,
  currentJobId,
  newJob,
  tags,
  countries,
  cities,
  loading,
}) => {
  const [readonly, setReadonly] = React.useState(!true);

  useEffect(() => {
    if (newJob) {
      toggleEditMode(true);
      setReadonly(false);
    }
    getTags();
    getCountry();
    getCity();
    // eslint-disable-next-line
  },[]);

  useEffect(() => {
    const id = match ? match.params.id : currentJobId;
    if (id) {
      getJobById(id);
    }
    // eslint-disable-next-line
  }, [match, currentJobId]);

  const saveJob = values => {
    toggleEditMode(false);
    const currentJob = {
      title: values.title,
      budget: values.budget,
      description: values.description,
      contact: {
        phone: values.phone,
        email: values.email,
      },
      additional_contacts: values.additional_contacts,
      location: {
        countries: values.countries,
        cities: values.cities,
      },
      tags: values.tags,
    };
    if (newJob) {
      createJob({ currentJob, userId: 1 });
    } else {
      editJob({ currentJob, jobId: job._id });
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Formik
      validationSchema={jobFormSchema}
      initialValues={{
        title: job.title,
        budget: job.budget,
        description: job.description,
        phone: job.contact.phone,
        email: job.contact.email,
        additional_contacts: job.additional_contacts,
        cities: job.location.cities,
        countries: job.location.countries,
        tags: job.tags,
      }}
      onSubmit={values => {
        debugger;
        saveJob(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <Styled.JobContainer>
            {console.log(errors)}
            <Styled.JobHeader>
              <Styled.Description>
                <div className="title">
                  Title:
                  {editMode ? (
                    <Input
                      placeholder={''}
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      errors={errors}
                      touched={touched}
                    />
                  ) : (
                    job.title
                  )}
                </div>
                <div className="budget">
                  Budget:
                  {editMode ? (
                    <Input
                      placeholder={''}
                      type="text"
                      name="budget"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.budget}
                      errors={errors}
                      touched={touched}
                    />
                  ) : (
                    job.budget
                  )}
                </div>
                <div className="short-description">
                  Description:
                  {editMode ? (
                    <Input
                      placeholder={''}
                      type="text"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      errors={errors}
                      touched={touched}
                    />
                  ) : (
                    job.description
                  )}
                </div>
              </Styled.Description>
              <Styled.Tags>
                {editMode ? (
                  <>
                    TAGS:
                    <Field
                      name="tags"
                      component={FormikSelect}
                      value={job.tags ? job.tags : values.tags}
                      options={tags}
                      isMulti={true}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errors={errors}
                      touched={touched}
                    />
                  </>
                ) : (
                  job.tags.map(tag => <div key={uuidv4()}>{tag.label}</div>)
                )}
              </Styled.Tags>
            </Styled.JobHeader>
            <Styled.Contact>
              <div>How to contact:</div>
              <div className="phone">
                phone:
                {editMode ? (
                  <Input
                    placeholder={job.contact.phone}
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    errors={errors}
                    touched={touched}
                  />
                ) : (
                  job.contact.phone
                )}
              </div>
              <div className="email">
                email:
                {editMode ? (
                  <Input
                    placeholder={job.contact.email}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errors={errors}
                    touched={touched}
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
                  <Textarea
                    placeholder={''}
                    name="additional_contacts"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.additional_contacts}
                    errors={errors}
                    touched={touched}
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
                  <Field
                    name="countries"
                    component={FormikSelect}
                    value={values.countries}
                    options={countries}
                    isMulti={true}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                  />
                ) : (
                  <span>
                    {job.location.countries.map(c => (
                      <span key={uuidv4()}>{c.label},</span>
                    ))}
                  </span>
                )}
              </div>
              <div className="city">
                city:
                {editMode ? (
                  <Field
                    name="cities"
                    component={FormikSelect}
                    value={values.cities}
                    options={cities}
                    isMulti={true}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    errors={errors}
                    touched={touched}
                  />
                ) : (
                  <span>
                    {job.location.cities.map(c => (
                      <span key={uuidv4()}>{c.label},</span>
                    ))}
                  </span>
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
                  <button className="save" type="submit" onClick={handleSubmit}>
                    Save
                  </button>
                ) : (
                  <button className="edit" onClick={() => toggleEditMode(true)}>
                    Edit
                  </button>
                )}
                <button className="close" onClick={() => toggleEditMode(false)}>
                  Close
                </button>
              </Styled.Buttons>
            )}
          </Styled.JobContainer>
        );
      }}
    </Formik>
  );
};

export default connect(
  (state: any) => {
    const { JOB_REDUCER, SHARED_DATA_REDUCER } = state;
    return {
      job: JOB_REDUCER.job,
      tags: SHARED_DATA_REDUCER.tags,
      countries: SHARED_DATA_REDUCER.country,
      cities: SHARED_DATA_REDUCER.city,
      editMode: JOB_REDUCER.editMode,
      loading: JOB_REDUCER.loading,
    };
  },
  {
    toggleEditMode: ActionCreators.toggleEditMode,
    createJob: ActionCreators.createJob,
    editJob: ActionCreators.editJob,
    getJobById: ActionCreators.getJobById,
    getTags: SharedDataAC.getTags,
    getCountry: SharedDataAC.getCountry,
    getCity: SharedDataAC.getCity,
  },
)(Job);
