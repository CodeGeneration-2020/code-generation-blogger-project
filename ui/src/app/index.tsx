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
import NewBlogger from './components/new-blogger';
import Job from './containers/JobContainer';
import ListJob from './components/list-jobs/list.component';
import CustomerProfile from './containers/CustomerProfileContainer';
import { ActionCreators as SharedAC } from '../store/sharedData/actions';
import { connect } from 'react-redux';
import { bloggerTheme, customerTheme } from '../consts/theme';
import rootComponentWrapper from '../HOC/rootComponentWrapper';

function App({ setTheme, getCountries, getTags }) {
  const isBlogger = !true;
  React.useEffect(() => {
    setTheme(isBlogger ? bloggerTheme : customerTheme);
    getCountries();
    getTags();
    // eslint-disable-next-line
  },[])

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
        <Route path="/list/bloggers" render={() => <ListBloggers />} />
        <Route path="/list/jobs" component={ListJob} />
        <Route exact path="/blogger/details/:id" component={BloggerDetails} />
        <Route path="/job/details/:jobId/:customerId" component={Job} />
        <Route path="/customer/profile/:id" component={CustomerProfile} />
        <Route path="/addJob" render={() => <Job newJob={true} />} />
        <Route path="/new-blogger" component={NewBlogger} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default rootComponentWrapper(
  connect(null, {
    setTheme: SharedAC.setTheme,
    getCountries: SharedAC.getCountry,
    getTags: SharedAC.getTags,
  })(App),
);
