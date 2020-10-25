import React from 'react';
import { Helmet } from 'react-helmet-async';
import ChooseRole from '../../components/choose-role';

export function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <ChooseRole />
    </div>
  );
}
