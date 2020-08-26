import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';
import { bloggerFilters, customerFilters } from '../../consts/lists';
import { IState } from '../../types/index';

const initialState: IState = {
  filters: {},
  name: '',
  type: '',
  isAuth: false,
};

const USER_REDUCER = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [ActionTypes.INIT_FILTERS]: (state, action) => {
      return {
        ...state,
        filters:
          action.payload.type === 'blogger' ? bloggerFilters : customerFilters,
      };
    },
    [ActionTypes.SET_FILTER]: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.title]: { value: action.payload.value },
        },
      };
    },
    [ActionTypes.REGISTER_USER]: (state, action) => {
      return {
        ...state,
      };
    },
    [ActionTypes.GET_USERS]: (state, action) => {
      return {
        ...state,
      };
    },
  },
});

export default USER_REDUCER;
