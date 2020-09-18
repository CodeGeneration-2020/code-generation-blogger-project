import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Styled from '../job.styles';
import { ActionCreators } from '../../../../store/job/actions';
import { jobFormSchema } from '../../../helpers/validation';
import Input from '../../shared/Input/input.commponent';
import Textarea from '../../shared/Textarea/textarea.component';
import FormikSelect from '../../shared/FormikSelect/formik-select.component';
import { ILocation, ITags, IJob } from '../../../../types';

const Job: React.FC<{
  createJob: any;
  editJob: any;
  job: IJob;
  newJob?: boolean;
  tags: ITags[];
  countries: ILocation;
  cities: ILocation;
  loading: boolean;
  toggleMode: any;
}> = ({
  job,
  createJob,
  editJob,
  newJob,
  tags,
  countries,
  cities,
  loading,
  toggleMode,
}) => {
  const saveJob = values => {
    toggleMode(false);
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
            <Styled.JobHeader>
              <Styled.Description>
                <div className="title">
                  Title:
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
                </div>
                <div className="budget">
                  Budget:
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
                </div>
                <div className="short-description">
                  Description:
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
                </div>
              </Styled.Description>
              <Styled.Tags>
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
              </Styled.Tags>
            </Styled.JobHeader>
            <Styled.Contact>
              <div>How to contact:</div>
              <div className="phone">
                phone:
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
              </div>
              <div className="email">
                email:
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
              </div>
            </Styled.Contact>
            <Styled.AdditionalContact>
              <div>Additional Contacts</div>
              <div className="contact">
                <Textarea
                  placeholder={''}
                  name="additional_contacts"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.additional_contacts}
                  errors={errors}
                  touched={touched}
                />
              </div>
            </Styled.AdditionalContact>
            <Styled.Location>
              Location:
              <div className="country">
                country:
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
              </div>
              <div className="city">
                city:
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
              </div>
            </Styled.Location>
            <Styled.Attachments>
              <div>Attachments +</div>
              <input type="file" />
            </Styled.Attachments>
            <Styled.Buttons>
              <button className="save" type="submit" onClick={handleSubmit}>
                Save
              </button>

              <button className="close" onClick={() => toggleMode(false)}>
                Close
              </button>
            </Styled.Buttons>
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
    createJob: ActionCreators.createJob,
    editJob: ActionCreators.editJob,
  },
)(Job);
