import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as UserActions from '../../../store/user/actions';
import { connect } from 'react-redux';
import USER_REDUCER from 'store/user/reducer';
import * as Styled from './list.styles';
import Blogger from '../Blogger/blogger.component';
import Customer from '../Customer/customer.component';
import axios from 'axios';

const Filters = props => {
  const [index, setIndex] = React.useState(false);
  const [bloggers, setBloggers] = React.useState([]);
  const typeArray = ['blogger', 'customer'];
  const type = typeArray[index ? 1 : 0];
  React.useEffect(() => {
    props.initFilters({ type: type });
    axios
      .get('http://localhost:3000/www.json')
      .then(({ data }) => setBloggers(data));
    load();
  }, [index, load, props, type]);
  const load = async () => {
    await props.getUsers(6);
    console.log('load worked');
  };
  return (
    <Styled.Wrapper>
      {type === 'blogger' ? <Blogger /> : <Customer />}
      <button onClick={() => setIndex(!index)}>Change state!!! </button>
      <p>
        IS Blogger : <span>{type}</span>
      </p>
      <Styled.BloggerListWrap>
        {bloggers &&
          bloggers.map(item => (
            <Styled.BloggerItem>
              <Styled.Avatar>
                <img
                  alt={(item as any).full_name}
                  src={(item as any).profile_picture}
                />
              </Styled.Avatar>
              <Styled.DataCol>
                <h3>{(item as any).full_name}</h3>
                <p>
                  Post: {(item as any).postPrice}$ Story:{' '}
                  {(item as any).storyPrice}$
                </p>
                <p>POst + Story price : XXX</p>
              </Styled.DataCol>
              <Styled.DataCol>
                <h3>
                  {(item as any).location.country},{(item as any).location.city}
                </h3>
                <p>Follovers: {(item as any).metric.folower} / active?</p>
                <p>Auditory: XXX</p>
              </Styled.DataCol>
              <Styled.TagBox>
                {(item as any).tags &&
                  (item as any).tags.map(tag => <span>#{tag}</span>)}
              </Styled.TagBox>
            </Styled.BloggerItem>
          ))}
      </Styled.BloggerListWrap>
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
    registerUser: UserActions.ActionCreators.registerUser,
    getUsers: UserActions.ActionCreators.getUsers,
  },
)(Filters);
