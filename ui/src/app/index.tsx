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
import { NotFoundPage } from './components/not-found-page/Loadable';
import ListBloggers from './components/list-bloggers/list.component';
import BloggerDetails from './components/blogger-details/BloggerDetails';
import Job from './containers/JobContainer';
import ListJob from './components/list-jobs/list.component';

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
        <Route path="/list/bloggers" component={ListBloggers} />
        <Route path="/list/jobs" component={ListJob} />
        <Route exact path="/blogger/details/:id" component={BloggerDetails} />
        <Route path="/job/details/:id" component={Job} />
        <Route path="/job" render={() => <Job newJob={true} />} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
