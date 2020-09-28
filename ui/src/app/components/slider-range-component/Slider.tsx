import React from 'react';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { Handle, Track } from './component';

const CustomSlider = props => {
  const sliderStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  const railStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: 16,
    borderRadius: 8,
    cursor: 'pointer',
    backgroundColor: '#30393E', // polosa
  };

  const domain: number[] = props.domain;
  return (
    <Slider
      mode={1}
      step={1}
      domain={domain}
      rootStyle={sliderStyle}
      onChange={value => {
        props.changeHandler(value);
      }}
      values={[0, domain[1] / 2]}
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
    </Slider>
  );
};

export default CustomSlider;
