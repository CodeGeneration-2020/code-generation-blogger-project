import React from 'react';
import { Helmet } from 'react-helmet-async';
import Registration from '../../../services/registration.service';
import UsersAPI from '../../../services/users.service';
import PieChart from '../../components/shared/PieChart';
import BarChart from '../../components/shared/BarChart';
const data = [
  { attribute: 'Kiev', value: 50 },
  { attribute: 'Lviv', value: 26 },
  { attribute: 'Kharkiv', value: 14 },
  { attribute: 'Dnepro(город)', value: 7 },
  { attribute: 'Tokio', value: 0.8 },
];
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <a
        href={
          'https://api.instagram.com/oauth/authorize/?client_id=1582327085279138&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code'
        }
      >
        Login
      </a>
      <button onClick={() => Registration.auth('blogger')}>auth</button>
      <button onClick={() => UsersAPI.getUsers('bloggers')}>getUsers</button>
      <button onClick={() => UsersAPI.getBloggersByFilters()}>
        getBloggersByFilters
      </button>
      <div>
        <BarChart data={data} />
        <PieChart data={[30, 70]} />
      </div>
    </>
  );
}
