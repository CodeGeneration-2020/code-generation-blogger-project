import React from 'react';
import { reduceNumber } from '../../../helpers/reduceNumber';
import * as Style from './styles';
import Ava from '../../../../img/ava.svg';
import Icon from '../../../../img/insta-icon.svg';
import PostIcon from '../../../../img/post.svg';
import StoryIcon from '../../../../img/story.svg';
import PostStoryIcon from '../../../../img/post-story.svg';
import LineChart from '../../shared/line-chart';
import parseFullName from '../../../helpers/parseFullName';

const ProfileInfo = ({ bloggerInfo }) => {
  return (
    <Style.ProfileInfo>
      <Style.HeaderProfile>
        <div className="blogger-info">
          <div className="ava">
            <img src={Ava} alt="ava" />
          </div>
          <div className="info">
            <div className="full-name">
              <span className="name">
                {parseFullName.getName(
                  (bloggerInfo && bloggerInfo.full_name) || '',
                )}
              </span>
              <span className="surname">
                {parseFullName.getSurname(
                  (bloggerInfo && bloggerInfo.full_name) || '',
                )}
              </span>
            </div>
            <div className="location">
              <span className="country">
                {bloggerInfo && bloggerInfo.location.country.label},
              </span>
              <span className="city">
                {bloggerInfo && bloggerInfo.location.city.label}
              </span>
            </div>
          </div>
        </div>
        <div className="insta-icon">
          <img src={Icon} alt="insta-icon" />
        </div>
      </Style.HeaderProfile>
      <Style.Metric>
        <div className="price-list">
          <div className="item">
            <span className="title">Post</span>

            <div className="icon">
              <img src={PostIcon} width={26} height={32} alt="post" />
            </div>

            <span className="sum">{bloggerInfo.postPrice}$</span>
          </div>
          <div className="item">
            <span className="title">Story</span>
            <div className="icon">
              <img src={StoryIcon} width={26} height={42} alt="story" />
            </div>
            <span className="sum">{bloggerInfo.storyPrice}$</span>
          </div>
          <div className="item">
            <span className="title">Post+Story</span>

            <div className="icon">
              <img
                src={PostStoryIcon}
                width={75}
                height={42}
                alt="post-story"
              />
            </div>

            <span className="sum">{bloggerInfo.pricePS}$</span>
          </div>
        </div>

        <Style.Audience>
          <div className="result">
            <span className="value">
              {bloggerInfo && reduceNumber(bloggerInfo.metric.followers).value}
            </span>
            <span className="unit">
              {bloggerInfo && reduceNumber(bloggerInfo.metric.followers).unit}
            </span>
          </div>
          <div className="details">
            <div className="er">
              <span className="count">
                {bloggerInfo && bloggerInfo.metric.er}%
              </span>
              <span className="text">ER</span>
            </div>
            <div className="chart">
              <LineChart er={bloggerInfo && bloggerInfo.metric.er} />
            </div>
          </div>
        </Style.Audience>
      </Style.Metric>
    </Style.ProfileInfo>
  );
};

export default ProfileInfo;
