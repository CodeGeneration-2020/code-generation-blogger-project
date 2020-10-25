import React, { useEffect } from 'react';
import * as Style from './styles';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../../../store/locationSearch/actions';

const LocationSearch = props => {
  useEffect(() => {
    props.initSearch(props.title);
    // eslint-disable-next-line
  }, []);

  const setFilteredLocation = search => {
    let response = props.location;
    if (search) {
      response = props.location.filter(location => {
        return location.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }
    const filters = response.filter(
      location =>
        props.selected.every(e => location.value !== e.value) && location,
    );
    props.updateSearch({ name: props.title, input: search, filters });
  };

  return (
    <Style.SearchContainer className="location-search">
      <input
        placeholder={props.title}
        onFocus={() => {
          if (props.title === props.search.active_search) return;
          if (
            (props.title === 'state' && props.selected.length >= 3) ||
            (props.title === 'city' && props.selected.length >= 6)
          ) {
            props.setActiveSearch(null);
            return;
          }
          props.setActiveSearch(props.title);
          props.updateSearch({
            name: props.title,
            input: '',
            filters: props.location,
          });
          setFilteredLocation('');
        }}
        // onBlur={() => props.setActiveSearch(null)}
        type="text"
        value={props.search[props.title] && props.search[props.title].input}
        onChange={e => setFilteredLocation(e.target.value)}
      />
    </Style.SearchContainer>
  );
};

export default connect(
  (state: any) => {
    const { LOCATION_SEARCH_REDUCER } = state;
    return {
      search: LOCATION_SEARCH_REDUCER,
    };
  },
  {
    initSearch: ActionCreators.initSearch,
    updateSearch: ActionCreators.updateSearch,
    setActiveSearch: ActionCreators.setActiveSearch,
  },
)(LocationSearch);
