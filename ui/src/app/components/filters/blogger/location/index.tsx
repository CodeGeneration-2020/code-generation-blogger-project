import React from 'react';
import * as Style from './styles';
import LocationSearch from './search/index';
import { connect } from 'react-redux';
import SelectionList from './selection-list';
import SelectedList from './selected-list';
import { ActionCreators } from '../../../../../store/locationSearch/actions';

const LocationFilter = props => {
  const setCountryFilter = option => {
    const country = [...props.selectedCountry, option];
    props.setFilter(country, 'country');
    const countryId = country[country.length - 1].value;
    props.getCityByCountryId(countryId);
  };

  const setCityFilter = option => {
    const city = [...props.selectedCity, option];
    props.setFilter(city, 'city');
  };

  const removeCountry = optionId => {
    const country = props.selectedCountry.filter(c => c.value !== optionId);
    const city = props.selectedCity.filter(c => c.countryId !== optionId);
    props.setFilter(country, 'country');
    props.setFilter(city, 'city');
    props.clearCityByCountryId(optionId);
  };

  const removeCity = optionId => {
    const city = props.selectedCity.filter(c => c.value !== optionId);
    props.setFilter(city, 'city');
  };

  return (
    <Style.Location>
      <Style.Search>
        <div className="item">
          <LocationSearch
            location={props.countries}
            title={'state'}
            selected={props.selectedCountry}
          />
        </div>

        <div className="item">
          <LocationSearch
            location={props.cities}
            title={'city'}
            selected={props.selectedCity}
          />
        </div>
      </Style.Search>

      <Style.LocationList>
        {props.active_search ? (
          <SelectionList
            theme={props.theme}
            active_search={props.active_search}
            setActiveSearch={props.setActiveSearch}
            selectedCountry={props.selectedCountry}
            selectedCity={props.selectedCity}
            setCountryFilter={setCountryFilter}
            setCityFilter={setCityFilter}
            searchCity={props.searchCity}
            searchState={props.searchState}
          />
        ) : (
          <SelectedList
            theme={props.theme}
            selectedCountry={props.selectedCountry}
            removeCountry={removeCountry}
            selectedCity={props.selectedCity}
            removeCity={removeCity}
          />
        )}
      </Style.LocationList>
    </Style.Location>
  );
};

export default connect(
  (state: any) => {
    const { LOCATION_SEARCH_REDUCER } = state;
    return {
      searchState: LOCATION_SEARCH_REDUCER.state,
      searchCity: LOCATION_SEARCH_REDUCER.city,
      active_search: LOCATION_SEARCH_REDUCER.active_search,
    };
  },
  {
    setActiveSearch: ActionCreators.setActiveSearch,
  },
)(LocationFilter);
