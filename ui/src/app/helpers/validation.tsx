import * as yup from 'yup';

/* Registration Validation Schema */
export const titleSchema = yup
  .string()
  .trim()
  .nullable(true)
  .min(3, 'Title to short.')
  .max(50, 'Title to long.')
  .required('Please enter job title.');

export const budgetSchema = yup
  .number('Please enter a valid budget must be number')
  .nullable(true)
  .required('Please enter your budget.');

export const descriptionSchema = yup
  .string()
  .trim()
  .nullable(true)
  .min(5, 'Please, enter short description');

export const phoneSchema = yup
  .string()
  .trim()
  .nullable(true)
  .max(20, 'Phone to long.')
  .required('Please enter your phone.');

export const emailSchema = yup
  .string()
  .trim()
  .nullable(true)
  .email('Please enter a valid email address.')
  .required('Please enter your email.');

export const additionalContactSchema = yup
  .string()
  .trim()
  .nullable(true)
  .max(100, 'additional contact to long.');

export const countrySchema = yup.array().required('please select country');

export const citySchema = yup.array().required('please select city');

export const tagsSchema = yup.array().required('please select tags');

export const jobFormSchema = yup.object().shape({
  title: titleSchema,
  budget: budgetSchema,
  description: descriptionSchema,
  phone: phoneSchema,
  email: emailSchema,
  additional_contacts: additionalContactSchema,
  countries: countrySchema,
  cities: citySchema,
  tags: tagsSchema,
});

//CustomerInfo

export const nameSchema = yup.string().trim().required('Please enter name');

export const surNameSchema = yup
  .string()
  .trim()
  .required('Please enter surname');

export const linkSchema = yup
  .string()
  .trim()
  .required('Please enter instagram link');

export const countryCustomerInfoSchema = yup
  .object()
  .required('Please select country');

export const cityCustomerInfoSchema = yup
  .object()
  .required('Please select city');

export const profilePictureSchema = yup
  .string()
  .trim()
  .required('Please select profile picture');

export const customerInfoFormSchema = yup.object().shape({
  name: nameSchema,
  surname: surNameSchema,
  profile_picture: profilePictureSchema,
  country: countryCustomerInfoSchema,
  city: cityCustomerInfoSchema,
  mail: emailSchema,
  phone: phoneSchema,
  link: linkSchema,
});
