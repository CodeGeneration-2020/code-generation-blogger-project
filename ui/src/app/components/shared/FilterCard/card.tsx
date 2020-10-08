import React from 'react';
import * as Styled from './card.styles';
import PropTypes from 'prop-types';
import withTheme from '../../../../HOC/withTheme';

const FilterCard = props => {
  return (
    <Styled.CardContainer theme={props.theme} onClick={e => props.callback(e)}>
      <span className="title">{props.title}</span>
      <Styled.HorizantalSep />
      {props.children}
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

export default withTheme(FilterCard);
