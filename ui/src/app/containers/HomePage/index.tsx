import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ActionCreators } from '../../../store/user/actions';
import { useDispatch } from 'react-redux';
import Service from "../../../services/registration.service";

export function HomePage() {
  const dispatch = useDispatch();
  const register = user => {
    Service.test();
    dispatch(ActionCreators.registerUser(user));
  };
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <button onClick={() => register('customer')}>Register Customer</button>
      <br />
      <button onClick={() => register('bloger')}>Register Bloger</button>
      <br />
      <span>HomePage container</span>
    </>
  );
}
