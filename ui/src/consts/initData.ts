export const initDataJob = job => {
  return {
    title: job.title,
    budget: job.budget,
    description: job.description,
    phone: job.contact.phone,
    email: job.contact.email,
    additional_contacts: job.additional_contacts,
    cities: job.location.cities,
    countries: job.location.countries,
    tags: job.tags,
  };
};

export const initCustomerInfo = info => {
  return {
    name: info.name,
    surname: info.surname,
    profile_picture: info.profile_picture,
    country: info.location.country,
    city: info.location.city,
    mail: info.contact.mail,
    phone: info.contact.phone,
    link: info.contact.link,
  };
};

export const initPriceList = () => ({ post: '', story: '', postStory: '' });
