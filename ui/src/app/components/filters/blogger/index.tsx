import React, { useEffect } from 'react';
import * as Style from './styles';
import FilterCard from '../../shared/FilterCard/card';
import Search from './search';
import SubscribersFilter from './subscribers';
import PriceFilter from './price';
import GenderFilter from './gender';
import LocationFilter from './location';
import TagsFilter from './tags';
import { ActionCreators as SharedAC } from '../../../../store/sharedData/actions';
import { ActionCreators as FiltersAC } from '../../../../store/filters/actions';
import { connect } from 'react-redux';

const BloggerFilters = props => {
  useEffect(() => {
    props.getTags();
    props.getCountry();
    // eslint-disable-next-line
  }, []);

  const setFilter = (filter, filterName) => {
    props.setFilter({
      value: filter && filter,
      title: filterName,
    });
  };

  return (
    <>
      {props.loading ? (
        <>...Loading</>
      ) : (
        <Style.FiltersContainer>
          <Search />
          <Style.Filters>
            <Style.SharedFilters>
              <div className="quantitative-filters">
                <div className="subscribers">
                  <FilterCard title={'Subscribers'}>
                    <SubscribersFilter
                      subscribers={props.filters.subscribers}
                      er={props.filters.er}
                      setFilter={(value, title) => setFilter(value, title)}
                    />
                  </FilterCard>
                </div>
                <div className="price">
                  <FilterCard title={'Price'}>
                    <PriceFilter
                      pricePost={props.filters.pricePost}
                      priceStory={props.filters.priceStory}
                      pricePS={props.filters.pricePS}
                      setFilter={(value, title) => setFilter(value, title)}
                    />
                  </FilterCard>
                </div>
              </div>

              <div className="person-filters">
                <div className="gender">
                  <FilterCard title={'Gender'}>
                    <GenderFilter
                      gender={props.filters.gender}
                      setFilter={(value, title) => setFilter(value, title)}
                    />
                  </FilterCard>
                </div>
                <div className="location">
                  <FilterCard title={'State and City'}>
                    <LocationFilter
                      countries={props.countries}
                      cities={props.cities}
                      selectedCountry={props.filters.country || []}
                      selectedCity={props.filters.city || []}
                      setFilter={(value, title) => setFilter(value, title)}
                      getCityByCountryId={props.getCity}
                      clearCityByCountryId={props.clearCityByCountryId}
                    />
                  </FilterCard>
                </div>
              </div>
            </Style.SharedFilters>
            <Style.Tags>
              <FilterCard title={'Tags'}>
                <TagsFilter
                  tags={props.tags}
                  selectedTags={props.filters.tags || []}
                  setFilter={(value, title) => setFilter(value, title)}
                />
              </FilterCard>
            </Style.Tags>
          </Style.Filters>
        </Style.FiltersContainer>
      )}
    </>
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
  },
)(BloggerFilters);
