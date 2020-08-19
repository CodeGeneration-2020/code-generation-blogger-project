import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <a
          href={'https://api.instagram.com/oauth/authorize/?client_id=1582327085279138&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code'}
      >
          Login
      </a>
    </>
  );
}
