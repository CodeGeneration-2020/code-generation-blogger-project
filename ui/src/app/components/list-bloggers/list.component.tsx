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
import BloggerCard from './blogger-card';
import { PAGINATION, SKIP } from '../../../consts/lists';

const BloggerList = props => {
  const [idBlogger, toggleIdBlogger] = React.useState<number>();
  const openSideBar = (e, id: number) => {
    e.preventDefault();
    toggleIdBlogger(id);
    openSlideMenu();
  };

  const getBloggersPagination = () => {
    props.getBloggersPagination({
      filters: props.filters,
      skip: props.skip + PAGINATION.limit,
      limit: PAGINATION.limit,
    });
    props.setSkip({ key: SKIP.bloggers, skip: props.skip + PAGINATION.limit });
  };

  return (
    <>
      <Styled.Wrapper>
        <UsersFiltersContainer isBlogger={props.isBlogger} />
        <Styled.BloggerListWrap>
          <InfiniteScroll
            dataLength={props.bloggers.length}
            next={() => getBloggersPagination()}
            hasMore={true}
            loader={props.loading && <h4>Loading...</h4>}
          >
            {props.bloggers.length > 0 &&
              props.bloggers.map((item: IBloggerInfo) => (
                <NavLink
                  className="item"
                  to={'/blogger/details/' + item.ig_id}
                  key={uuidv4()}
                  onClick={e => {
                    openSideBar(e, item.ig_id);
                  }}
                >
                  <BloggerCard
                    postPrice={item.postPrice}
                    storyPrice={item.storyPrice}
                    pricePS={item.pricePS}
                    tags={item.tags || []}
                    followers={item.metric.followers}
                    engagement_rate={item.metric.er}
                    full_name={item.full_name}
                    country={item.location.country.label}
                    city={item.location.city.label}
                  />
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
    };
  },
  {
    getBloggersPagination: BloggerActions.ActionCreators.getBloggersPagination,
    setSkip: FiltersActions.ActionCreators.setSkip,
  },
)(BloggerList);
