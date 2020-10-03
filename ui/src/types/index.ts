import { RootState } from './RootState';

export type { RootState };

export interface IFilters {
  price: Array<number>;
  subscribers: Array<number>;
  country: Array<string>;
  city: Array<string>;
  sex: string;
  tags: Array<string>;
}

export interface IFiltersReducer {
  filters: IFilters | {};
  type: string;
  skip: number;
  limit: number;
}

export interface ILocation {
  value: string;
  label: string;
}

export interface IBloggerCard {
  full_name: string;
  country: string;
  city: string;
  followers: number;
  engagement_rate: number;
  postPrice: number | undefined;
  storyPrice: number | undefined;
  pricePS: number | undefined;
  tags: Array<{ value: string; label: string }>;
}

export interface ITags {
  value: string;
  label: string;
}

export interface IJob {
  title: string;
  budget: number;
  description: string;
  tags: ITags[];
  contact: {
    phone: string;
    email: string;
  };
  additional_contacts: string;
  location: {
    countries: ILocation[];
    cities: ILocation[];
  };
  attachments: [];
  _id: string;
  customerId: any;
}
