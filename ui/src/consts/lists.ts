export const customerFilters = {
  subscribers: {
    value: null,
  },
  country: {
    value: '',
  },
  sity: {
    value: '',
  },
  sex: {
    value: '',
  },
  price: {
    value: null,
  },
  tags: {
    value: [],
  },
};

export const bloggerFilters = {
  title: {
    value: '',
  },
  price: {
    value: null,
  },
  tags: {
    value: [],
  },
};

export const sexOptions = [
  { value: 'any', label: 'any' },
  { value: 'female', label: 'female' },
  { value: 'male', label: 'male' },
];
export const country = [
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'USA', label: 'Usa' },
  { value: 'Deutch', label: 'Deutch' },
  { value: 'France', label: 'France' },
  { value: 'England', label: 'England' },
];
export const city = [
  { value: 'Kharkiv', label: 'Kharkiv' },
  { value: 'Kiev', label: 'Kiev' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
];
export const tagsOptions = [
  { value: 'sport', label: 'sport' },
  { value: 'it', label: 'it' },
  { value: 'meetings', label: 'meetings' },
  { value: 'entertainment', label: 'entertainment' },
  { value: 'mobile', label: 'mobile' },
  { value: 'web', label: 'web' },
  { value: 'android', label: 'android' },
  { value: 'ios', label: 'ios' },
  { value: 'kk', label: 'kk' },
];

export const PAGINATION = {
  skip: 0,
  limit: 5,
};

export const TABS = {
  feedbacks: 'feedbacks',
  jobs: 'jobs',
};
export const FILLSTARS = { grey: '#90A1AC', score: '#FFD800' };

export const FILETYPES = {
  jpg: 'image/jpeg',
  png: 'image/png',
  zip: 'application/x-zip-compressed',
  pdf: 'application/pdf',
  xls: 'application/vnd.ms-excel',
  ppt: 'application/vnd.ms-powerpoint',
};

export const AVATYPES = {
  jpg: 'image/jpeg',
  png: 'image/png',
};

export const JOBINIT = {
  title: '',
  budget: '',
  description: '',
  tags: [],
  contact: {
    phone: '',
    email: '',
  },
  additional_contacts: '',
  location: {
    countries: [],
    cities: [],
  },
  attachments: [],
  _id: '',
  customerId: {},
};
