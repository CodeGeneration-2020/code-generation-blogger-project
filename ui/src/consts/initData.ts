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
