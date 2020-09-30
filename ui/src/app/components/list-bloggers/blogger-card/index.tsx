import React from 'react';
import * as Style from './styles';
import Ava from '../../../../img/ava.svg';
import PostIcon from '../../../../img/post.svg';
import StoryIcon from '../../../../img/story.svg';
import PostStoryIcon from '../../../../img/post+story.svg';
import LineChart from '../../shared/line-chart';
import Tag from '../../shared/Tag';
import { reduceNumber } from '../../../helpers/reduceNumber';
import { IBloggerCard } from '../../../../types/index';
import parseFullName from '../../../helpers/parseFullName';

const BloggerCard: React.FC<IBloggerCard> = ({
  full_name,
  country,
  city,
  followers,
  engagement_rate,
  postPrice,
  storyPrice,
  pricePS,
  tags,
}) => {
  return (
    <Style.CardContainer>
      <Style.PersonInfo>
        <div className="avatar">
          <img src={Ava} alt="ava" />
        </div>
        <div className="info">
          <div className="full-name">
            <div className="name">{parseFullName.getName(full_name)}</div>
            <div className="surname">{parseFullName.getSurname(full_name)}</div>
          </div>
          <div className="location">
            <span className="country">{country},</span>
            <span className="city">{city}</span>
          </div>
        </div>
      </Style.PersonInfo>

      <Style.Audience>
        <div className="result">
          <span className="value">{reduceNumber(followers).value}</span>
          <span className="unit">{reduceNumber(followers).unit}</span>
        </div>
        <div className="details">
          <div className="er">
            <span className="count">{engagement_rate}%</span>
            <span className="text">ER</span>
          </div>
          <div className="chart">
            <LineChart er={engagement_rate} />
          </div>
        </div>
      </Style.Audience>

      <Style.PriceList>
        <div className="post">
          <div className="title">Post</div>
          <div className="icon">
            <img src={PostIcon} alt="post" />
          </div>
          <div className="sum">{postPrice}$</div>
        </div>
        <div className="story">
          <div className="title">Story</div>
          <div className="icon">
            <img src={StoryIcon} alt="story" />
          </div>
          <div className="sum">{storyPrice}$</div>
        </div>
        <div className="post-story">
          <div className="title">Post+Story</div>
          <div className="icon">
            <img src={PostStoryIcon} alt="post+story" />
          </div>
          <div className="sum">{pricePS}$</div>
        </div>
      </Style.PriceList>

      <Style.TagsList>
        <div className="tags">
          <div className="first-line">
            {tags &&
              tags.map((tag, i) => {
                if (i < 2) {
                  return <Tag key={i} title={tag.label} className={'tag'} />;
                }
                return null;
              })}
          </div>
          <div className="second-line">
            {tags &&
              tags.map((tag, i) => {
                if (i > 1 && i < 5) {
                  return <Tag key={i} title={tag.label} className={'tag'} />;
                }
                return null;
              })}
          </div>
        </div>
      </Style.TagsList>
    </Style.CardContainer>
  );
};

export default BloggerCard;
