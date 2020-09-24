import React from 'react';
import * as Styled from './card.styles';

const FilterCard = props => {
  return (
    <Styled.CardContainer>
      <span className="title">{props.title}</span>
      <Styled.HorizantalSep />
      {props.children}
    </Styled.CardContainer>
  );
};

export default FilterCard;
