import React from 'react';
import * as Style from './styles';
import Slider from '../../../../shared/slider-location/slider.component';

const SelectionList = props => {
  return (
    <Style.SelectionContainer className="selection-list">
      {props.active_search === 'state' ? (
        <Slider
          theme={props.theme}
          location={props.searchState.filters || []}
          setLocation={location => {
            props.setCountryFilter(location);
            props.setActiveSearch(null);
          }}
        />
      ) : props.selectedCountry.length ? (
        <Slider
          theme={props.theme}
          location={props.searchCity.filters || []}
          setLocation={location => {
            props.setCityFilter(location);
            props.setActiveSearch(null);
          }}
        />
      ) : (
        <div className="prompt">Choose country please</div>
      )}
    </Style.SelectionContainer>
  );
};

export default SelectionList;
