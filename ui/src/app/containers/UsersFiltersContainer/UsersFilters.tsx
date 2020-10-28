import React from 'react';
import BloggerFilters from '../../components/filters/blogger';
import JobFilters from '../../components/filters/job';
import { connect } from 'react-redux';
import useDebounce from '../../helpers/useDebounce';
import * as BloggerActions from '../../../store/blogger/actions';
import * as JobActions from '../../../store/job/actions';
import * as FiltersActions from '../../../store/filters/actions';

const UsersFilters = props => {
  const isBlogger = !true;
  const Filters = isBlogger ? JobFilters : BloggerFilters;
  const getUsers = isBlogger
    ? props.getJobsByFilters
    : props.getBloggersByFilters;
  const type = isBlogger ? 'jobs' : 'bloggers';

  React.useEffect(() => {
    getUsers(props.filters);
    // eslint-disable-next-line
  }, []);

  const debounceSearch = useDebounce(props.filters, 1000);

  React.useEffect(
    () => {
      if (Object.keys(props.filters).length) {
        props.resetSkip({ key: type });
        getUsers(debounceSearch);
      }
    },
    //eslint-disable-next-line
  [debounceSearch]
  );

  return <Filters />;
};

export default connect(
  (state: any) => {
    const { FILTERS_REDUCER } = state;
    return {
      filters: FILTERS_REDUCER.filters,
    };
  },
  {
    getBloggersByFilters: BloggerActions.ActionCreators.getBloggerByFilters,
    getJobsByFilters: JobActions.ActionCreators.getJobsByFilters,
    resetSkip: FiltersActions.ActionCreators.resetSkip,
  },
)(UsersFilters);
