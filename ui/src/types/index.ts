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
