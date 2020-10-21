import React, { useEffect } from 'react';
import * as Style from './styles';
import { IOption, IJob } from '../../../../types';
import { Formik, FormikValues } from 'formik';
import { jobFormSchema } from '../../../helpers/validation';
import { initDataJob } from '../../../../consts/initData';
import ShortTitle from './short-title';
import Budget from './budget';
import Tags from './tags';
import Location from './location';
import Description from './description';
import Contacts from './contacts';
import Attachments from './attachments';

const EditJob: React.FC<{
  job: IJob;
  tags: IOption[];
  countries: IOption[];
  cities: IOption[];
  saveJob: any;
  setCountry: any;
  innerRef: FormikValues;
  removeCityByCountryId: any;
  getCitiesByCountryId: any;
}> = ({
  job,
  tags,
  countries,
  cities,
  saveJob,
  innerRef,
  setCountry,
  removeCityByCountryId,
  getCitiesByCountryId,
}) => {
  useEffect(() => {
    job.location.countries.forEach(c => getCitiesByCountryId(c.value));
    // eslint-disable-next-line
  }, []);
  return (
    <Formik
      innerRef={innerRef as any}
      validationSchema={jobFormSchema}
      initialValues={initDataJob(job)}
      onSubmit={values => {
        saveJob(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, setValues }) => {
        return (
          <Style.JobContainer>
            <ShortTitle
              handleChange={handleChange}
              handleBlur={handleBlur}
              title={values.title}
              errors={errors}
              touched={touched}
            />
            <Budget
              budget={values.budget}
              setBudget={value =>
                !isNaN(value) && setValues({ ...values, budget: value })
              }
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <Tags
              chosenTags={values.tags}
              optionsTags={tags}
              errors={errors}
              selectTag={tag =>
                setValues({ ...values, tags: [...values.tags, tag] })
              }
              removeTag={tag =>
                setValues({
                  ...values,
                  tags: values.tags.filter(t => t.value !== tag.value),
                })
              }
            />
            <Location
              optionsCountries={countries}
              optionsCities={cities}
              chosenCountries={values.countries}
              chosenCities={values.cities}
              errors={errors}
              setCountry={setCountry}
              removeCountry={country => {
                setValues({
                  ...values,
                  countries: values.countries.filter(
                    c => c.value !== country.value,
                  ),
                  cities: values.cities.filter(
                    c => c.countryId !== country.value && c,
                  ),
                });
                removeCityByCountryId(country.value);
              }}
              selectCity={city =>
                setValues({
                  ...values,
                  cities: [...values.cities, city],
                })
              }
              removeCity={city =>
                setValues({
                  ...values,
                  cities: values.cities.filter(c => c.value !== city.value),
                })
              }
            />
            <Description
              handleChange={handleChange}
              handleBlur={handleBlur}
              description={values.description}
              errors={errors}
              touched={touched}
            />
            <Contacts
              handleChange={handleChange}
              handleBlur={handleBlur}
              additional_contacts={values.additional_contacts}
              errors={errors}
              touched={touched}
            />
            <Attachments />
          </Style.JobContainer>
        );
      }}
    </Formik>
  );
};

export default EditJob;
