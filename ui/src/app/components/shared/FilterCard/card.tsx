import React from 'react';
import * as Styled from './card.styles';
import PropTypes from 'prop-types';

const FilterCard = ({ title, children, theme, callback }) => {
  return (
    <Styled.CardContainer theme={theme} onClick={e => callback(e)}>
      <span className="title">{title}</span>
      <Styled.HorizantalSep />
      {children}
    </Styled.CardContainer>
  );
};

FilterCard.propTypes = {
  theme: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

FilterCard.defaultProps = {
  theme: {},
  title: '',
  callback: () => {},
};

export default FilterCard;
