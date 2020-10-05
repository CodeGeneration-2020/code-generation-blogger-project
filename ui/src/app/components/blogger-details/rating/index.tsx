import React from 'react';
import * as Style from './styles';
import StarIcon from '../../../../img/star.svg';

const Rating = props => {
  return (
    <Style.Rating>
      <div className="rating-info">
        <span className="title">average coming</span>
        <span className="count">1400</span>
        <span className="text">subscribers</span>
      </div>
      <div className="stars">
        {[1, 2, 3, 4, 5].map(_ => (
          <img src={StarIcon} alt="star" className="star" />
        ))}
      </div>
    </Style.Rating>
  );
};

export default Rating;
