import { createSlice } from '@reduxjs/toolkit';
import { ActionCreators, ActionTypes } from './actions';
import { bloggerFilters, customerFilters } from '../../consts/lists';
import { IState } from '../../types/index';
import { FilterItem } from 'app/components/List/list.styles';

const initialState: IState = {
  filters: {},
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
  },
});

export default USER_REDUCER;
