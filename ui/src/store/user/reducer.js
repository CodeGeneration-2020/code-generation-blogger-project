import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  type: '',
  isAuth: false,
};

const USER_REDUCER = createSlice({
  name: 'user',
  initialState,
});

export default USER_REDUCER;
