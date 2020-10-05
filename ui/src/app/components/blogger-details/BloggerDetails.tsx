import React from 'react';
import { connect } from 'react-redux';
// import CityChartContainers from '../../containers/ChartsContainer/City';
// import AgeChartContainers from '../../containers/ChartsContainer/Age';
// import SexChartContainers from '../../containers/ChartsContainer/sex-chart/Sex';
// import {
//   calculateSroryPostPrice,
//   calculateER,
// } from '../../helpers/calculateBloggerDetails';
import * as Styled from './BloggerDetails.style';
import {
  IAgeDetails,
  ICityDetails,
  ISexDetails,
  IBloggerInfo,
} from '../../../types/components';
import * as BloggerActions from '../../../store/blogger/actions';
// import { v4 as uuidv4 } from 'uuid';
// import InfiniteScroll from 'react-infinite-scroll-component';
import ProfileInfo from './profile-info';
import Rating from './rating';
import CommentCard from './comment-card';
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
}) => {
  //const [toggle, setToggle] = React.useState<boolean>(false);
  // const [skipComments, setSkipComments] = React.useState<number>(0);
  const initBloggerInfo = id => {
    if (id) {
      // setSkipComments(0);
      // clearComments();
      getBlogger(id);
    }
  };
  // const getComments = bloggerData => {
  //   if (!bloggerData) return;
  //   getBloggerComments({
  //     bloggerId: bloggerData._id,
  //     skip: skipComments,
  //     limit: 5,
  //   });
  //   setSkipComments(skipComments + 5);
  // };

  React.useEffect(() => {
    const ig_id = match ? match.params.id : idBlogger;
    initBloggerInfo(ig_id);
    // eslint-disable-next-line
  }, [match, idBlogger]);

  // React.useEffect(() => {
  //   getComments(bloggerData);
  //   // eslint-disable-next-line
  // },[bloggerData])

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
          <CommentCard />
        </>
      )}
    </Styled.BloggerDetailsContainer>
  );
};

export default connect(
  state => {
    const { BLOGGER_REDUCER, LOADER_REDUCER }: any = state;
    return {
      loading: LOADER_REDUCER.loading,
      cityInfo: BLOGGER_REDUCER.bloggerInfo.dataCity,
      sexInfo: BLOGGER_REDUCER.bloggerInfo.dataSex,
      ageInfo: BLOGGER_REDUCER.bloggerInfo.dataAge,
      bloggerData: BLOGGER_REDUCER.bloggerInfo.bloggerData,
      comments: BLOGGER_REDUCER.bloggerComments,
    };
  },
  {
    getBlogger: BloggerActions.ActionCreators.getBloggerById,
    getBloggerComments: BloggerActions.ActionCreators.getBloggerComments,
    clearComments: BloggerActions.ActionCreators.clearBloggerComments,
  },
)(BloggerDetails);
