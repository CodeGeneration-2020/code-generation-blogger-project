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
  const [volume, setVolume] = React.useState(0);
  const [subscribers, setSubscribers] = React.useState(0);
  const [valueLocation, setValueLocation] = React.useState('');
  const sexOptions = [
    { value: 'any', label: 'any' },
    { value: 'female', label: 'female' },
    { value: 'male', label: 'male' },
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
      <Styled.Label htmlFor="location">Location</Styled.Label>
      <Styled.Input
        type="text"
        id="location"
        onChange={e => {
          props.setFilter({ value: e.target.value, title: 'location' });
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
    setFilters: UserActions.ActionCreators.setFilters,
    setFilter: UserActions.ActionCreators.setFilter,
    initFilters: UserActions.ActionCreators.initFilters,
  },
)(Customer);
