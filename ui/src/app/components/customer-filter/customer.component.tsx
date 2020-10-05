import React from 'react';
import * as Styled from './customer.styles';
import Select from 'react-select';

import { connect } from 'react-redux';
import * as FiltersActions from '../../../store/filters/actions';
import * as BloggerActions from '../../../store/blogger/actions';
import CustomSlider from '../slider-range-component/Slider';
import { sexOptions, country, city, tagsOptions } from '../../../consts/lists';
import useDebounce from '../../helpers/useDebounce';

const Customer = props => {
  const debounceSearch = useDebounce(props.filters, 1000);

  React.useEffect(
    () => {
      if (Object.keys(props.filters).length) {
        props.getBloggersByFilters(debounceSearch);
      }
    },
    //eslint-disable-next-line
  [debounceSearch]
  );
  //unmount clear filters
  React.useEffect(() => {
    return () => {
      props.clearFilters();
      props.resetSkip();
    };
    // eslint-disable-next-line
  }, []);

  const setFilter = (filter, filterName) => {
    props.resetSkip();
    props.setFilter({
      value: filter && filter.map(item => item.value),
      title: filterName,
    });
  };

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor="price">Price</Styled.Label>
      <CustomSlider
        title="price"
        changeHandler={(value, title) => setFilter([value], title)}
      />
      <Styled.Label htmlFor="country">country</Styled.Label>
      <Select
        closeMenuOnSelect={false}
        //defaultValue={country[0]}
        isMulti
        options={country}
        id="country"
        onChange={country => {
          setFilter(country, 'country');
        }}
      />
      <Styled.Label htmlFor="city">city</Styled.Label>
      <Select
        closeMenuOnSelect={false}
        //defaultValue={city[0]}
        isMulti
        options={city}
        id="city"
        onChange={city => {
          setFilter(city, 'city');
        }}
      />

      <Styled.Label htmlFor="sex">Sex</Styled.Label>
      <Select
        //defaultValue={sexOptions[0]}
        options={sexOptions}
        id="sex"
        onChange={sex => {
          setFilter([sex], 'sex');
        }}
      />
      <Styled.Label htmlFor="tags">Tags</Styled.Label>
      <Select
        closeMenuOnSelect={false}
        //defaultValue={tagsOptions[0]}
        isMulti
        options={tagsOptions}
        id="tags"
        onChange={tag => {
          setFilter(tag, 'tags');
        }}
      />
      <Styled.Label htmlFor="subscribers">Subscribers</Styled.Label>
      <CustomSlider
        title="subscribers"
        changeHandler={(value, title) => setFilter([value], title)}
      />
    </Styled.Wrapper>
  );
};

export default connect(
  (state: any) => {
    const { FILTERS_REDUCER } = state;
    return {
      filters: FILTERS_REDUCER.filters,
    };
  },
  {
    setFilter: FiltersActions.ActionCreators.setFilter,
    //initFilters: FiltersActions.ActionCreators.initFilters,
    clearFilters: FiltersActions.ActionCreators.clearFilters,
    resetSkip: FiltersActions.ActionCreators.resetSkip,
    getBloggersByFilters: BloggerActions.ActionCreators.getBloggerByFilters,
  },
)(Customer);
