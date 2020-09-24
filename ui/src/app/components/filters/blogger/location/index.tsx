import React from 'react';
import * as Style from './styles';
import Select from '../../../shared/select';
import { v4 as uuidv4 } from 'uuid';
import BlueButton from '../../../shared/BlueButton/button.component';

const LocationFilter = props => {
  const removeOptionCity = optionId => {
    const city = props.selectedCity.filter(c => c.value !== optionId);
    props.setFilter(city, 'city');
  };

  const removeOptionCountry = optionId => {
    const country = props.selectedCountry.filter(c => c.value !== optionId);
    const city = props.selectedCity.filter(c => c.countryId !== optionId);
    props.setFilter(country, 'country');
    props.setFilter(city, 'city');
    props.clearCityByCountryId(optionId);
  };

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

  return (
    <Style.Location>
      <div className="item">
        <div className="select-box">
          <div className="select">
            <Select
              changeHandler={option => setCountryFilter(option)}
              title="state"
              options={props.countries}
              selected={props.selectedCountry}
            />
          </div>
          <div className="button-plus">
            <Style.ButtonPlus>
              <span>+</span>
            </Style.ButtonPlus>
          </div>
        </div>
        <div className="options-list">
          {props.selectedCountry &&
            props.selectedCountry.map(c => {
              return (
                <span className="location-tag">
                  <BlueButton
                    key={uuidv4()}
                    onClick={() => removeOptionCountry(c.value)}
                  >
                    {c.label}
                  </BlueButton>
                </span>
              );
            })}
        </div>
      </div>

      <div className="item">
        <div className="select-box">
          <div className="select">
            <Select
              changeHandler={option => setCityFilter(option)}
              title="city"
              options={props.cities}
              selected={props.selectedCity}
            />
          </div>
          <div className="button-plus">
            <Style.ButtonPlus>
              <span>+</span>
            </Style.ButtonPlus>
          </div>
        </div>
        <div className="options-list">
          {props.selectedCity &&
            props.selectedCity.map(c => {
              return (
                <span className="location-tag">
                  <BlueButton
                    key={uuidv4()}
                    onClick={() => removeOptionCity(c.value)}
                  >
                    {c.label}
                  </BlueButton>
                </span>
              );
            })}
        </div>
      </div>
    </Style.Location>
  );
};

export default LocationFilter;
