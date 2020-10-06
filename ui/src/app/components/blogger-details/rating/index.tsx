import React from 'react';
import * as Style from './styles';
import StarIcon from '../../../../img/star.svg';
import { v4 as uuidv4 } from 'uuid';

const Rating = ({ average_coming, score, theme }) => {
  return (
    <Style.Rating theme={theme}>
      <div className="rating-info">
        <span className="title">average coming</span>
        <span className="count">{average_coming}</span>
        <span className="text">subscribers</span>
      </div>
      <div className="stars">
        {[...(Array(score).keys() as any)].map(_ => (
          <img src={StarIcon} alt="star" className="star" key={uuidv4()} />
        ))}
      </div>
    </Style.Rating>
  );
};

export default Rating;
