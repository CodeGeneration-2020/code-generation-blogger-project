import React from 'react';
import * as Style from './styles';
import BlueButton from '../../../components/shared/BlueButton/button.component';
import withTheme from '../../../../HOC/withTheme';

const Search = ({ ...props }) => {
  return (
    <Style.SearchContainer theme={props.theme}>
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          id="search-input"
          autoComplete={'off'}
        />
      </div>
      <div className="button">
        <BlueButton
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

export default withTheme(Search);
