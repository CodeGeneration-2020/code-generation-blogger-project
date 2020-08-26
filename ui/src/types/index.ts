import { RootState } from './RootState';

export type { RootState };

export interface IState {
  filters: object;
  name: '';
  type: '';
  isAuth: boolean;
}
