import React from 'react';
import * as Style from './styles';
import SelectedList from './selected-list';
import Select from '../../shared/TagsSelect/select.component';

const LocationFilter = props => {
  const setCountryFilter = option => {
    if (props.selectedCountry.length >= 3) return;
    const country = [...props.selectedCountry, option];
    props.setFilter(country, 'country');
    const countryId = country[country.length - 1].value;
    props.getCityByCountryId(countryId);
  };

  const setCityFilter = option => {
    if (props.selectedCity.length >= 6) return;
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
          <Select
            placeholder="state"
            options={props.countries}
            selected={props.selectedCountry}
            changeHandler={c => setCountryFilter(c)}
          />
        </div>

        <div className="item">
          <Select
            placeholder="city"
            options={props.cities}
            selected={props.selectedCity}
            changeHandler={c => setCityFilter(c)}
          />
        </div>
      </Style.Search>

      <Style.LocationList>
        <SelectedList
          selectedCountry={props.selectedCountry}
          removeCountry={removeCountry}
          selectedCity={props.selectedCity}
          removeCity={removeCity}
        />
      </Style.LocationList>
    </Style.Location>
  );
};

export default LocationFilter;
