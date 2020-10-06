import React from 'react';
import { connect } from 'react-redux';
import * as Styled from './BloggerDetails.style';
import {
  IAgeDetails,
  ICityDetails,
  ISexDetails,
  IBloggerInfo,
} from '../../../types/components';
import * as BloggerActions from '../../../store/blogger/actions';
import { ActionCreators as FilterCreators } from '../../../store/filters/actions';
import ProfileInfo from './profile-info';
import Rating from './rating';
import Comments from './comments';
import Loader from '../../../loader/component/loader.component';
import Statistics from './statistics/statistics';

const BloggerDetails: React.FC<{
  match?: any;
  idBlogger?: number;
  getBlogger: any;
  getBloggerComments: any;
  clearComments: any;
  sexInfo: ISexDetails;
  cityInfo: ICityDetails;
  ageInfo: IAgeDetails;
  bloggerData: IBloggerInfo;
  comments: any;
  loading: boolean;
  skip: number;
  limit: number;
  setSkip: any;
  resetSkip: any;
}> = ({
  match,
  idBlogger,
  getBlogger,
  sexInfo,
  cityInfo,
  ageInfo,
  bloggerData,
  getBloggerComments,
  clearComments,
  comments,
  loading,
  skip,
  limit,
  setSkip,
  resetSkip,
}) => {
  const ig_id = match ? match.params.id : idBlogger;
  const initBloggerInfo = id => {
    if (id) {
      getBlogger(id);
      clearComments();
      resetSkip({ key: 'comments' });
      getBloggerComments({
        bloggerId: id,
        skip,
        limit,
      });
    }
  };

  React.useEffect(() => {
    initBloggerInfo(ig_id);
    // eslint-disable-next-line
  }, [match, idBlogger]);

  return (
    <Styled.BloggerDetailsContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo bloggerInfo={bloggerData || ''} />
          <Styled.StatisticsCharts>
            <Statistics
              sexInfo={sexInfo}
              cityInfo={cityInfo}
              ageInfo={ageInfo}
            />
          </Styled.StatisticsCharts>
          <Rating />
          <Comments
            comments={comments}
            loading={loading}
            getPaginationComments={() => {
              getBloggerComments({
                bloggerId: ig_id,
                skip: skip + 3,
                limit: 3,
              });
              setSkip({ key: 'comments', skip: skip + 3, limit: 3 });
            }}
          />
        </>
      )}
    </Styled.BloggerDetailsContainer>
  );
};

export default connect(
  state => {
    const { BLOGGER_REDUCER, LOADER_REDUCER, FILTERS_REDUCER }: any = state;
    return {
      loading: LOADER_REDUCER.loading,
      cityInfo: BLOGGER_REDUCER.bloggerInfo.dataCity,
      sexInfo: BLOGGER_REDUCER.bloggerInfo.dataSex,
      ageInfo: BLOGGER_REDUCER.bloggerInfo.dataAge,
      bloggerData: BLOGGER_REDUCER.bloggerInfo.bloggerData,
      comments: BLOGGER_REDUCER.bloggerComments,
      skip: FILTERS_REDUCER.pagination.comments.skip,
      limit: FILTERS_REDUCER.pagination.comments.limit,
    };
  },
  {
    getBlogger: BloggerActions.ActionCreators.getBloggerById,
    getBloggerComments: BloggerActions.ActionCreators.getBloggerComments,
    clearComments: BloggerActions.ActionCreators.clearBloggerComments,
    setSkip: FilterCreators.setSkip,
    resetSkip: FilterCreators.resetSkip,
  },
)(BloggerDetails);
