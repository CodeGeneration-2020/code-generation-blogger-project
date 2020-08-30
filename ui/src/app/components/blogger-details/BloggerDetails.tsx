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

const BloggerDetails: React.FC<{
  match?: any;
  idBlogger?: number;
  getBlogger: any;
  sexInfo: ISexDetails;
  cityInfo: ICityDetails;
  ageInfo: IAgeDetails;
  bloggerData: IBloggerData;
}> = ({
  match,
  idBlogger,
  getBlogger,
  sexInfo,
  cityInfo,
  ageInfo,
  bloggerData,
}) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  React.useEffect(() => {
    const ig_id = match ? match.params.id : idBlogger;
    getBlogger(ig_id);
    // eslint-disable-next-line
  }, [match, idBlogger]);

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
              {' '}
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
          </Styled.Charts>
        </>
      ) : null}
    </Styled.BloggerDetailsContainer>
  );
};

export default connect(
  state => {
    const { BLOGGER_REDUCER }: any = state;
    return {
      cityInfo: BLOGGER_REDUCER.bloggerInfo.dataCity,
      sexInfo: BLOGGER_REDUCER.bloggerInfo.dataSex,
      ageInfo: BLOGGER_REDUCER.bloggerInfo.dataAge,
      bloggerData: BLOGGER_REDUCER.bloggerInfo.bloggerData,
    };
  },
  {
    getBlogger: BloggerActions.ActionCreators.getBloggerById,
  },
)(BloggerDetails);
