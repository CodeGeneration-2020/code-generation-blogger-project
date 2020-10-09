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

export interface IPagination {
  skip: number;
  limit: number;
}

export interface IFiltersReducer {
  filters: IFilters | {};
  type: string;
  pagination: any;
}

export interface IOption {
  value: string;
  label: string;
}

export interface ILocation {
  countries: IOption[];
  cities: IOption[];
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

export interface IJob {
  title: string;
  budget: number;
  description: string;
  tags: IOption[];
  contact: {
    phone: string;
    email: string;
  };
  additional_contacts: string;
  location: {
    countries: IOption[];
    cities: IOption[];
  };
  attachments: [];
  _id: string;
  customerId: any;
}
