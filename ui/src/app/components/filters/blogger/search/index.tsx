import React from 'react';
import * as Style from './styles';
import BlueButton from '../../../../components/shared/BlueButton/button.component';

const Search = () => {
  return (
    <Style.SearchContainer>
      <div className="input">
        <input type="text" placeholder="Search" id="search-input" />
      </div>
      <div className="button">
        <BlueButton type="btn" style={{ width: '100%', height: '100%' }}>
          <span className="button-text">Search</span>
        </BlueButton>
      </div>
    </Style.SearchContainer>
  );
};

export default Search;
