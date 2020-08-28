import React from 'react';
import { connect } from 'react-redux';
import * as BloggerActions from '../../../store/blogger/actions';
import * as FiltersActions from '../../../store/filters/actions';
import * as Styled from './list.styles';
import { NavLink } from 'react-router-dom';
import SideBar, { openSlideMenu } from '../../components/sidebar/SideBar';
import { IBloggerInfo } from '../../../types/components/index';
import { v4 as uuidv4 } from 'uuid';
import UsersFiltersContainer from '../../containers/UsersFiltersContainer/UsersFilters';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListComponent = props => {
  const [idBlogger, toggleIdBlogger] = React.useState<number | undefined>();

  const openSideBar = async (e, id: number) => {
    e.preventDefault();
    await toggleIdBlogger(id);
    openSlideMenu();
  };

  React.useEffect(() => {
    props.getBloggersByFilters(props.filters);
    // eslint-disable-next-line
  }, []);

  const getBloggersPagination = () => {
    props.getBloggersPagination({
      filters: props.filters,
      skip: props.skip + props.limit,
      limit: props.limit,
    });
    props.setSkip();
  };

  return (
    <>
      <Styled.Wrapper>
        <UsersFiltersContainer />
        <button onClick={() => getBloggersPagination()}>
          Start Pagination
        </button>
        <Styled.BloggerListWrap>
          <InfiniteScroll
            dataLength={props.bloggers.length}
            next={() => getBloggersPagination()}
            hasMore={true}
            loader={props.loading && <h4>Loading...</h4>}
          >
            {props.bloggers.length &&
              props.bloggers.map((item: IBloggerInfo) => (
                <NavLink
                  to={'/blogger/details/' + item.ig_id}
                  key={item.ig_id}
                  onClick={e => {
                    openSideBar(e, item.ig_id);
                  }}
                >
                  <Styled.BloggerItem>
                    <Styled.Avatar>
                      <img alt={item.full_name} src={item.profile_picture} />
                    </Styled.Avatar>
                    <Styled.DataCol>
                      <h3>{item.full_name}</h3>
                      <p>
                        Post: {item.postPrice}$ Story: {item.storyPrice}$
                      </p>
                      <p>POst + Story price : XXX</p>
                    </Styled.DataCol>
                    <Styled.DataCol>
                      <h3>
                        {item.location.country},{item.location.city}
                      </h3>
                      <p>Follovers: {item.metric.followers} / active?</p>
                      <p>Auditory: XXX</p>
                    </Styled.DataCol>
                    <Styled.TagBox>
                      {item.tags &&
                        item.tags.map(tag => (
                          <span key={uuidv4()}>#{tag}</span>
                        ))}
                    </Styled.TagBox>
                  </Styled.BloggerItem>
                </NavLink>
              ))}
          </InfiniteScroll>
        </Styled.BloggerListWrap>
      </Styled.Wrapper>
      {idBlogger && <SideBar id={idBlogger} />}
    </>
  );
};

export default connect(
  (state: any) => {
    const { BLOGGER_REDUCER, FILTERS_REDUCER } = state;
    return {
      bloggers: BLOGGER_REDUCER.bloggers,
      loading: BLOGGER_REDUCER.loading,
      filters: FILTERS_REDUCER.filters,
      skip: FILTERS_REDUCER.skip,
      limit: FILTERS_REDUCER.limit,
    };
  },
  {
    getBloggersByFilters: BloggerActions.ActionCreators.getBloggerByFilters,
    getBloggersPagination: BloggerActions.ActionCreators.getBloggersPagination,
    setSkip: FiltersActions.ActionCreators.setSkip,
  },
)(ListComponent);
