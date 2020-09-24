import React from 'react';
import * as Styled from '../job.styles';
import Input from '../../shared/Input/input.commponent';
import Textarea from '../../shared/Textarea/textarea.component';
import FormikSelect from '../../shared/FormikSelect/formik-select.component';
import { ILocation, ITags, IJob } from '../../../../types';
import { Formik, Field, FormikValues } from 'formik';
import { jobFormSchema } from '../../../helpers/validation';
import { initDataJob } from '../../../../consts/initData';

const EditJob: React.FC<{
  job: IJob;
  tags: ITags[];
  countries: ILocation;
  cities: ILocation;
  newJob: boolean;
  createJob: any;
  editJob: any;
  callBack: any;
  innerRef: FormikValues;
}> = ({
  job,
  tags,
  countries,
  cities,
  newJob,
  createJob,
  editJob,
  callBack,
  innerRef,
}) => {
  const saveJob = dataJob => {
    callBack();
    if (newJob) {
      createJob({ dataJob, userId: 1 });
    } else {
      editJob({ dataJob, jobId: job._id });
    }
  };

  return (
    <Formik
      innerRef={innerRef as any}
      validationSchema={jobFormSchema}
      initialValues={initDataJob(job)}
      onSubmit={values => {
        saveJob(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => {
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
                    value={values.tags}
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
          </Styled.JobContainer>
        );
      }}
    </Formik>
  );
};

export default EditJob;
