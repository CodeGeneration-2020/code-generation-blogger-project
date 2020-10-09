import React from 'react';
import StarIcon from '../../../../img/star.svg';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const DrawStars = ({ count, className }) => {
  const items: any = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <img src={StarIcon} alt="star" key={uuidv4()} className={className} />,
    );
  }
  return <>{items}</>;
};

DrawStars.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
};

DrawStars.defaultProps = {
  className: 'star',
  count: 0,
};

export default DrawStars;
