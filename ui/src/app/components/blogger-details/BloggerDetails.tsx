import React from 'react';
import { connect } from 'react-redux';
import CityChartContainers from '../../containers/ChartsContainer/City';
import AgeChartContainers from '../../containers/ChartsContainer/Age';
import SexChartContainers from '../../containers/ChartsContainer/sex-chart/Sex';
import {
  calculateSroryPostPrice,
  calculateER,
} from '../../helpers/calculateBloggerDetails';
import './Chart.css';
import * as Styled from './BloggerDetails.style';
import {
  IAgeDetails,
  ICityDetails,
  ISexDetails,
  IBloggerData,
} from '../../../types/components';
import * as BloggerActions from '../../../store/blogger/actions';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';

const BloggerDetails: React.FC<{
  match?: any;
  idBlogger?: number;
  getBlogger: any;
  getBloggerComments: any;
  clearComments: any;
  sexInfo: ISexDetails;
  cityInfo: ICityDetails;
  ageInfo: IAgeDetails;
  bloggerData: IBloggerData;
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
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [skipComments, setSkipComments] = React.useState<number>(0);
  const initBloggerInfo = id => {
    if (id) {
      setSkipComments(0);
      clearComments();
      getBlogger(id);
    }
  };
  const getComments = bloggerData => {
    if (!bloggerData) return;
    getBloggerComments({
      bloggerId: bloggerData._id,
      skip: skipComments,
      limit: 5,
    });
    setSkipComments(skipComments + 5);
  };

  React.useEffect(() => {
    const ig_id = match ? match.params.id : idBlogger;
    initBloggerInfo(ig_id);
    // eslint-disable-next-line
  }, [match, idBlogger]);

  React.useEffect(() => {
    getComments(bloggerData);
    // eslint-disable-next-line
  },[bloggerData])

  return (
    <Styled.BloggerDetailsContainer>
      <Styled.HeaderProfile>
        <div className="avatar">
          <span>Blogger's avatar</span>
        </div>
        <div className="blogger-info">
          <div className="fs-name">
            <span className="first-name">
              {bloggerData && bloggerData.full_name.split(' ')[0]}
            </span>
            <span className="surname">
              {bloggerData && bloggerData.full_name.split(' ')[1]}
            </span>
          </div>
          <div className="location">
            <span className="country">
              {bloggerData && bloggerData.location.country},
            </span>
            <span className="city">
              {bloggerData && bloggerData.location.city}
            </span>
          </div>
        </div>
        <div className="icon">
          <span>Instagram icon</span>
        </div>
      </Styled.HeaderProfile>
      <Styled.Characteristics>
        <div className="price">
          <div className="single-price">
            <span className="post">
              Post: {bloggerData && bloggerData.postPrice}$
            </span>
            <span className="story">
              Story: {bloggerData && bloggerData.storyPrice}$
            </span>
          </div>
          <div className="total-price">
            <span>
              Post + Story:{' '}
              {bloggerData &&
                calculateSroryPostPrice(
                  bloggerData.storyPrice,
                  bloggerData.postPrice,
                )}
              $
            </span>
          </div>
        </div>
        <div className="analytics">
          <div className="followers">
            <span>
              Followers: {bloggerData && bloggerData.metric.followers}
            </span>
          </div>
          <div className="engagement-rate">
            <span>
              ER:{' '}
              {bloggerData &&
                calculateER(
                  (bloggerData.metric.followers / 100) * 12,
                  (bloggerData.metric.followers / 100) * 8,
                  bloggerData.metric.followers,
                )}
              %
            </span>
          </div>
        </div>
      </Styled.Characteristics>
      <div className="toggle-charts">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? 'Hide statistic' : 'Show more statistic'}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {toggle && cityInfo && sexInfo && ageInfo ? (
          <>
            <Styled.Charts>
              <div className="header">
                <span>Аудитория</span>
              </div>
              <div className="charts">
                <div className="city">
                  <CityChartContainers data={cityInfo} />
                </div>
                <div className="sex">
                  <SexChartContainers data={sexInfo} />
                </div>
              </div>
              <div className="age">
                <AgeChartContainers data={ageInfo} />
              </div>
            </Styled.Charts>
            <Styled.Statistic>
              <div className="avg-impression">
                <div className="post"></div>
                <div className="story"></div>
              </div>
              <div className="avg-coverage">
                <div className="post"></div>
                <div className="story"></div>
              </div>
            </Styled.Statistic>
          </>
        ) : null}
        <Styled.Result>
          <div>* * * * *</div>
          <div>Средний приход 1400 подписчиков</div>
        </Styled.Result>
        <Styled.ListComments>
          {comments.length > 0 ? (
            <InfiniteScroll
              height={500}
              dataLength={comments.length}
              next={() => {
                getBloggerComments({
                  bloggerId: bloggerData._id,
                  skip: skipComments,
                  limit: 5,
                });
                setSkipComments(skipComments + 5);
              }}
              hasMore={true}
              loader={loading && <h4>Loading...</h4>}
            >
              {comments.map(c => (
                <div key={uuidv4()} className="comment">
                  <div>user:{c.customerId.full_name}</div>
                  <div>comment:{c.comment}</div>
                </div>
              ))}
            </InfiniteScroll>
          ) : (
            <div>Отзывов пока нет</div>
          )}
        </Styled.ListComments>
      </div>
    </Styled.BloggerDetailsContainer>
  );
};

export default connect(
  state => {
    const { BLOGGER_REDUCER }: any = state;
    return {
      loading: BLOGGER_REDUCER.loading,
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
