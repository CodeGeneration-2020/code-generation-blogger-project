/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import BloggerDetails from './components/blogger-details/BloggerDetails';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/blogger:id"
          render={() => (
            <BloggerDetails
              cityDetails={dataCity}
              sexDetails={dataSex}
              ageDetails={dataAge}
            />
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

const dataCity = [
  { city: 'Kiev', users: 500 },
  { city: 'Lviv', users: 260 },
  { city: 'Kharkiv', users: 142 },
  { city: 'Dnepro(город)', users: 79 },
  { city: 'Tokio', users: 2 },
  { city: 'Druzhkovka', users: 14 },
  { city: 'Lutsk', users: 7 },
  { city: 'London', users: 452 },
];
const dataAge = [
  { age: '13-17', users: 1 },
  { age: '18-24', users: 706 },
  { age: '25-34', users: 902 },
  { age: '35-44', users: 290 },
  { age: '45-54', users: 80 },
  { age: '55-64', users: 1 },
  { age: '64+', users: 20 },
];

const dataSex = {
  men: 400,
  women: 600,
};
