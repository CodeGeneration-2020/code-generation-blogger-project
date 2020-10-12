import React, { useEffect } from 'react';
import * as Style from './styles';
import FilterCard from '../../shared/FilterCard/card';
import Search from '../search';
import PriceFilter from '../price';
import LocationFilter from '../location';
import TagsFilter from '../tags';
import { ActionCreators as SharedAC } from '../../../../store/sharedData/actions';
import { ActionCreators as FiltersAC } from '../../../../store/filters/actions';
import { ActionCreators as LocationAC } from '../../../../store/locationSearch/actions';
import { connect } from 'react-redux';
import closeSlider from '../../../helpers/closeSlider';
import Loader from '../../../../loader/component/loader.component';

const BloggerFilters = props => {
  useEffect(() => {
    props.getTags();
    props.getCountry();
    // eslint-disable-next-line
  }, []);

  return (
    <Style.FiltersContainer>
      {props.loading && <Loader />}
      <Search />
      <Style.Filters>
        <Style.SharedFilters>
          <div className="price">
            <FilterCard title={'Price'}>
              <PriceFilter
                pricePost={props.filters.pricePost}
                priceStory={props.filters.priceStory}
                pricePS={props.filters.pricePS}
                setFilter={(value, title) => props.setFilter({ value, title })}
              />
            </FilterCard>
          </div>

          <div className="location">
            <FilterCard
              title={'State and city'}
              callback={e => {
                closeSlider(e.target.parentNode.className, props.closeSlider);
              }}
            >
              <LocationFilter
                countries={props.countries}
                cities={props.cities}
                selectedCountry={props.filters.country || []}
                selectedCity={props.filters.city || []}
                setFilter={(value, title) => props.setFilter({ value, title })}
                getCityByCountryId={props.getCity}
                clearCityByCountryId={props.clearCityByCountryId}
              />
            </FilterCard>
          </div>
        </Style.SharedFilters>
        <Style.Tags>
          <FilterCard title={'Tags'}>
            <TagsFilter
              tags={props.tags}
              selectedTags={props.filters.tags || []}
              setFilter={(value, title) => props.setFilter({ value, title })}
            />
          </FilterCard>
        </Style.Tags>
      </Style.Filters>
    </Style.FiltersContainer>
  );
};

export default connect(
  (state: any) => {
    const { SHARED_DATA_REDUCER, FILTERS_REDUCER } = state;
    return {
      cities: SHARED_DATA_REDUCER.cities,
      countries: SHARED_DATA_REDUCER.countries,
      tags: SHARED_DATA_REDUCER.tags,
      loading: SHARED_DATA_REDUCER.loading,
      filters: FILTERS_REDUCER.filters,
    };
  },
  {
    getTags: SharedAC.getTags,
    getCountry: SharedAC.getCountry,
    getCity: SharedAC.getCity,
    clearCityByCountryId: SharedAC.clearCityByCountryId,
    setFilter: FiltersAC.setFilter,
    closeSlider: LocationAC.setActiveSearch,
  },
)(BloggerFilters);
