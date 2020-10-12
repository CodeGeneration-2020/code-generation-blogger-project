import React from 'react';
import * as Style from './styles';
import withTheme from '../../../../HOC/withTheme';
import DrawStars from '../../shared/draw-stars';

const Rating: React.FC<{ average_coming; score; theme? }> = ({
  average_coming,
  score,
  theme,
}) => {
  return (
    <Style.Rating theme={theme}>
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

export default withTheme(Rating);
