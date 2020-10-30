import React from 'react';
import * as Style from './styles';
import Ava from '../../../../img/ava.svg';
import PostIcon from '../../../../img/post.svg';
import StoryIcon from '../../../../img/story.svg';
import PostStoryIcon from '../../../../img/post+story.svg';
import LineChart from '../../shared/line-chart';
import { reduceNumber } from '../../../helpers/reduceNumber';
import { IBloggerCard } from '../../../../types/index';
import parseFullName from '../../../helpers/parseFullName';
import ScrollTags from '../../shared/scroll-tags';
import withTheme from '../../../../HOC/withTheme';

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
  theme,
}) => {
  return (
    <Style.CardContainer>
      <Style.PersonInfo theme={theme}>
        <div className="avatar">
          <img src={Ava} alt="ava" />
        </div>
        <div className="info">
          <div className="full-name">
            <div className="name trim">{parseFullName.getName(full_name)}</div>
            <div className="surname trim">
              {parseFullName.getSurname(full_name)}
            </div>
          </div>
          <div className="location">
            <span className="country">{country},</span>
            <span className="city">{city}</span>
          </div>
        </div>
      </Style.PersonInfo>

      <Style.Audience theme={theme}>
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
        <span className="text-field">active audience share</span>
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

      <Style.TagsList theme={theme}>
        {tags.length > 0 && (
          <ScrollTags tags={tags} scroll={'auto'} className="tag" />
        )}
      </Style.TagsList>
    </Style.CardContainer>
  );
};

export default withTheme(BloggerCard);
