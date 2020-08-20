import React from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Handle, Track, Tick } from './component';

import * as UserActions from '../../../store/user/actions';
import { connect } from 'react-redux';

const CustomSlider = props => {
  const [volume, setVolume] = React.useState([150, 200]);
  const sliderStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '45px',
    marginTop: '1em',
  };

  const railStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: 14,
    borderRadius: 7,
    cursor: 'pointer',
    backgroundColor: 'rgb(155,155,155)',
  };

  const domain: number[] = [100, 500];
  return (
    <Slider
      mode={1}
      step={1}
      domain={domain}
      rootStyle={sliderStyle}
      onChange={value => {
        console.log('Value: ', value);
        props.setFilter({ value: value, title: props.title });
      }}
      values={volume}
    >
      <Rail>
        {({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                domain={domain}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
      <Ticks count={10}>
        {({ ticks }) => (
          <div className="slider-ticks">
            {ticks.map(tick => (
              <Tick key={tick.id} tick={tick} count={ticks.length} />
            ))}
          </div>
        )}
      </Ticks>
    </Slider>
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
)(CustomSlider);
