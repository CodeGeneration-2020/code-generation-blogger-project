import React from 'react';
import * as Style from './styles';
import DrawStars from '../../shared/draw-stars';

const Rating = ({ average_coming, score }) => {
  return (
    <Style.Rating>
      <div className="rating-info">
        <span className="title">average coming</span>
        <span className="count">{average_coming}</span>
        <span className="text">subscribers</span>
      </div>
      <div className="stars">
        <DrawStars count={score} />
      </div>
    </Style.Rating>
  );
};

export default Rating;
