import React from 'react';
import PropTypes from 'prop-types';
import { FILLSTARS } from '../../../../consts/lists';

const DrawStars = ({ count, className, score, setScore }) => {
  const items: any = [];
  const fillStars = i => {
    if (score === undefined) return FILLSTARS.score;
    else {
      return i > score ? FILLSTARS.grey : FILLSTARS.score;
    }
  };
  for (let i = 0; i < count; i++) {
    items.push(
      <svg
        onClick={() => {
          setScore && setScore(i + 1);
        }}
        width="38"
        height="36"
        viewBox="0 0 38 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M37.9022 13.5562C37.6564 12.798 36.9834 12.2596 36.1864 12.1885L25.3624 11.2076L21.0824 1.20728C20.7668 0.474706 20.0483 0 19.2491 0C18.4499 0 17.7322 0.474706 17.4159 1.20874L13.1359 11.2069L2.31041 12.1878C1.51488 12.261 0.843389 12.798 0.59607 13.5555C0.349486 14.3137 0.576985 15.1452 1.17877 15.669L9.36009 22.8313L6.94782 33.4397C6.77096 34.2199 7.07477 35.0257 7.72279 35.4938C8.07138 35.7451 8.4787 35.8733 8.89041 35.8733C9.24487 35.8733 9.5964 35.778 9.91197 35.589L19.2484 30.0186L28.5819 35.589C29.2652 35.9993 30.126 35.9619 30.7726 35.4938C31.4213 35.0242 31.7244 34.2177 31.5476 33.4397L29.1353 22.8313L37.3166 15.6704C37.9191 15.1459 38.1488 14.3159 37.9022 13.5562Z"
          fill={fillStars(i + 1)}
        />
      </svg>,
    );
  }
  return <>{items}</>;
};

DrawStars.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
  setScore: PropTypes.func,
  score: PropTypes.any,
};

DrawStars.defaultProps = {
  className: 'star',
  count: 0,
  score: undefined,
  setScore: () => {},
};

export default DrawStars;
