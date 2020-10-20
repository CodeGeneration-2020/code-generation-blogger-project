import React from 'react';
import * as Style from './styles';
import Select from '../../../shared/TagsSelect/select.component';
import ScrollList from '../sroll-list';

const Location = ({
  setCountry,
  removeCountry,
  selectCity,
  removeCity,
  chosenCities,
  optionsCities,
  chosenCountries,
  optionsCountries,
  errors,
}) => {
  return (
    <Style.Location>
      <div className="item">
        <div className="search">
          <Select
            changeHandler={country => setCountry(country)}
            selected={chosenCountries}
            options={optionsCountries}
            placeholder={'state'}
          />
        </div>
        <div className="chosen-location">
          <ScrollList
            list={chosenCountries}
            errors={errors['countries']}
            removeItem={item => removeCountry(item)}
          />
        </div>
      </div>
      <div className="item">
        <div className="search">
          <Select
            changeHandler={city => selectCity(city)}
            selected={chosenCities}
            options={optionsCities}
            placeholder={'city'}
          />
        </div>
        <div className="chosen-location">
          <ScrollList
            list={chosenCities}
            errors={errors['cities']}
            removeItem={item => removeCity(item)}
          />
        </div>
      </div>
    </Style.Location>
  );
};

export default Location;
