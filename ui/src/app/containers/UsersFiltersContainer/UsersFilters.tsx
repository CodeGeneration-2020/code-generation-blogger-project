import React from 'react';
import BloggerFilters from '../../components/filters/blogger';
import { connect } from 'react-redux';
import useDebounce from '../../helpers/useDebounce';
import * as BloggerActions from '../../../store/blogger/actions';
import * as FiltersActions from '../../../store/filters/actions';

const UsersFilters = props => {
  React.useEffect(() => {
    props.getBloggersByFilters(props.filters);
    // eslint-disable-next-line
  }, []);

  const debounceSearch = useDebounce(props.filters, 1000);

  React.useEffect(
    () => {
      if (Object.keys(props.filters).length) {
        props.resetSkip();
        props.getBloggersByFilters(debounceSearch);
      }
    },
    //eslint-disable-next-line
  [debounceSearch]
  );

  return <BloggerFilters />;
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
    resetSkip: FiltersActions.ActionCreators.resetSkip,
  },
)(UsersFilters);
