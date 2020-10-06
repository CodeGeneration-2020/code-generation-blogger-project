import React from 'react';
import * as Style from './styles';
import BlueButton from '../../../../components/shared/BlueButton/button.component';

const Search = ({ theme }) => {
  return (
    <Style.SearchContainer>
      <div className="input">
        <input type="text" placeholder="Search" id="search-input" />
      </div>
      <div className="button">
        <BlueButton
          theme={theme}
          type="btn"
          style={{
            width: '100%',
            height: '100%',
            boxShadow: '0px 1px 8px rgba(110, 110, 110, 0.1)',
            borderRadius: '16px',
          }}
        >
          <span className="button-text">Search</span>
        </BlueButton>
      </div>
    </Style.SearchContainer>
  );
};

export default Search;
