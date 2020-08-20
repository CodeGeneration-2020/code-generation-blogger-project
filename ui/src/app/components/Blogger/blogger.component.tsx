import React from 'react';
import * as Styled from './blogger.styles';
import Select from 'react-select';

import * as UserActions from '../../../store/user/actions';
import { connect } from 'react-redux';

import CustomSlider from '../SliderRangeComponent/Slider';

const Blogger = props => {
  const tagsOptions = [
    { value: '#endregion', label: '#endregion' },
    { value: '#region', label: '#region' },
    { value: '#akuna', label: '#akuna' },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor="price">Price</Styled.Label>
      <CustomSlider title="price" />
      <Styled.Label htmlFor="title">Title</Styled.Label>
      <Styled.Input
        type="text"
        id="title"
        onChange={e => {
          props.setFilter({ value: e.target.value, title: 'title' });
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
    </Styled.Wrapper>
  );
};

export default connect(
  (state: any) => {
    const { USER_REDUCER } = state;
    return {
      filters: USER_REDUCER.filters,
    };
  },
  {
    setFilters: UserActions.ActionCreators.setFilters,
    setFilter: UserActions.ActionCreators.setFilter,
    initFilters: UserActions.ActionCreators.initFilters,
  },
)(Blogger);
