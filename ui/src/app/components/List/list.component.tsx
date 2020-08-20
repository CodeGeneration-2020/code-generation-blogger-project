import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as UserActions from '../../../store/user/actions';
import { connect } from 'react-redux';
import USER_REDUCER from 'store/user/reducer';
import * as Styled from './list.styles';
import Blogger from '../Blogger/blogger.component';
import Customer from '../Customer/customer.component';

const Filters = props => {
  const [index, setIndex] = React.useState(false);
  const typeArray = ['blogger', 'customer'];
  const type = typeArray[index ? 1 : 0];
  React.useEffect(() => {
    props.initFilters({ type: type });
  }, [index, props, type]);
  return (
    <Styled.Wrapper>
      {type === 'blogger' ? <Blogger /> : <Customer />}
      <button onClick={() => setIndex(!index)}>Change state!!! </button>
      <p>
        IS Blogger : <span>{type}</span>
      </p>
    </Styled.Wrapper>
  );
};

export default connect(
  (state: any) => {
    const { USER_REDUCER } = state;
    return {
      isBlogger: USER_REDUCER.isBlogger,
      filters: USER_REDUCER.filters,
    };
  },
  {
    setFilters: UserActions.ActionCreators.setFilters,
    setFilter: UserActions.ActionCreators.setFilter,
    initFilters: UserActions.ActionCreators.initFilters,
  },
)(Filters);
