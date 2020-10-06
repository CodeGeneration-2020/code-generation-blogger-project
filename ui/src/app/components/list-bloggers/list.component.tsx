import React from 'react';
import { connect } from 'react-redux';
import * as BloggerActions from '../../../store/blogger/actions';
import * as FiltersActions from '../../../store/filters/actions';
import * as Styled from './list.styles';
import { NavLink } from 'react-router-dom';
import SideBar, { openSlideMenu } from '../sidebar/SideBar';
import { IBloggerInfo } from '../../../types/components/index';
import { v4 as uuidv4 } from 'uuid';
import UsersFiltersContainer from '../../containers/UsersFiltersContainer/UsersFilters';
import InfiniteScroll from 'react-infinite-scroll-component';
import BloggerDetails from '../blogger-details/BloggerDetails';

const ListComponent = props => {
  const [idBlogger, toggleIdBlogger] = React.useState<number>();

  const openSideBar = (e, id: number) => {
    e.preventDefault();
    toggleIdBlogger(id);
    openSlideMenu();
  };

  const getBloggersPagination = () => {
    props.getBloggersPagination({
      filters: props.filters,
      skip: props.skip,
      limit: props.limit,
    });

    props.setSkip({ key: 'bloggers', skip: props.skip + 3, limit: 3 });
  };

  return (
    <>
      <Styled.Wrapper>
        <UsersFiltersContainer />
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
                  key={uuidv4()}
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
                        {item.location && (
                          <>
                            {item.location.country.label},
                            {item.location.city.label}
                          </>
                        )}
                      </h3>
                      <p>Follovers: {item.metric.followers} / active?</p>
                      <p>Auditory: XXX</p>
                    </Styled.DataCol>
                    <Styled.TagBox>
                      {item.tags &&
                        item.tags.map(tag => (
                          <span key={uuidv4()}>#{tag.label}</span>
                        ))}
                    </Styled.TagBox>
                  </Styled.BloggerItem>
                </NavLink>
              ))}
          </InfiniteScroll>
        </Styled.BloggerListWrap>
      </Styled.Wrapper>
      <SideBar>
        <BloggerDetails idBlogger={idBlogger} />
      </SideBar>
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
      skip: FILTERS_REDUCER.pagination.bloggers.skip,
      limit: FILTERS_REDUCER.pagination.bloggers.limit,
    };
  },
  {
    getBloggersPagination: BloggerActions.ActionCreators.getBloggersPagination,
    setSkip: FiltersActions.ActionCreators.setSkip,
  },
)(ListComponent);
