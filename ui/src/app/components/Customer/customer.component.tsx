import React from 'react';
import * as Styled from './customer.styles';
import Select from 'react-select';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { connect } from 'react-redux';
import USER_REDUCER from 'store/user/reducer';
import * as UserActions from '../../../store/user/actions';
import CustomSlider from '../SliderRangeComponent/Slider';

const Customer = props => {
  const sexOptions = [
    { value: 'any', label: 'any' },
    { value: 'female', label: 'female' },
    { value: 'male', label: 'male' },
  ];
  const country = [
    { value: 'UK', label: 'uk' },
    { value: 'USA', label: 'usa' },
    { value: 'Deutch', label: 'deutch' },
  ];
  const city = [
    { value: 'Kharkiv', label: 'Kharkiv' },
    { value: 'Albaniya', label: 'Albaniya' },
    { value: 'Serbiya', label: 'Serbiya' },
  ];
  const tagsOptions = [
    { value: '#endregion', label: '#endregion' },
    { value: '#region', label: '#region' },
    { value: '#akuna', label: '#akuna' },
  ];
  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor="price">Price</Styled.Label>
      <CustomSlider title="price" />
      <Styled.Label htmlFor="country">country</Styled.Label>
      <Select
        closeMenuOnSelect={false}
        defaultValue={country[0]}
        isMulti
        options={country}
        id="country"
        onChange={country => {
          props.setFilter({
            value: country && country.map(item => item.value),
            title: 'country',
          });
        }}
      />
      <Styled.Label htmlFor="city">city</Styled.Label>
      <Select
        closeMenuOnSelect={false}
        defaultValue={city[0]}
        isMulti
        options={city}
        id="city"
        onChange={city => {
          props.setFilter({
            value: city && city.map(item => item.value),
            title: 'city',
          });
        }}
      />

      <Styled.Label htmlFor="sex">Sex</Styled.Label>
      <Select
        defaultValue={sexOptions[0]}
        options={sexOptions}
        id="sex"
        onChange={sex => {
          props.setFilter({ value: sex.value, title: 'sex' });
        }}
      />
      <Styled.Label htmlFor="tags">Tags</Styled.Label>
      <Select
        closeMenuOnSelect={false}
        defaultValue={tagsOptions[0]}
        isMulti
        options={tagsOptions}
        id="tags"
        onChange={tag => {
          props.setFilter({
            value: tag && tag.map(item => item.value),
            title: 'tags',
          });
        }}
      />
      <Styled.Label htmlFor="subscribers">Subscribers</Styled.Label>
      <CustomSlider title="subscribers" />
    </Styled.Wrapper>
  );
};

export default connect(
  (state: any) => {
    const { USER_REDUCER } = state;
    return {
      isBlogger: USER_REDUCER.isBlogger,
      filters: USER_REDUCER.filters,
    };
  },
  {
    setFilter: UserActions.ActionCreators.setFilter,
    initFilters: UserActions.ActionCreators.initFilters,
  },
)(Customer);
