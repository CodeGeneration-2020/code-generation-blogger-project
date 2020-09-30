import React from 'react';
import * as Styled from './card.styles';
import PropTypes from 'prop-types';

const FilterCard = ({ title, children, callback }) => {
  return (
    <Styled.CardContainer onClick={e => callback(e)}>
      <span className="title">{title}</span>
      <Styled.HorizantalSep />
      {children}
    </Styled.CardContainer>
  );
};

FilterCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

FilterCard.defaultProps = {
  title: '',
  callback: () => {},
};

export default FilterCard;
