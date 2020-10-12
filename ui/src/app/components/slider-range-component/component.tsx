import * as React from 'react';
import {
  SliderItem,
  GetHandleProps,
  GetTrackProps,
} from 'react-compound-slider';
import { ITheme } from '../../../types';
// *******************************************************
// HANDLE COMPONENT
// *******************************************************
interface IHandleProps {
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
}

export const Handle: React.SFC<IHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => {
  return (
    <div
      className="handle"
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: 'absolute',
        top: 5,
        zIndex: 5,
        width: 4,
        height: 4,
        cursor: 'pointer',
        borderRadius: '50%',
        background:
          'linear-gradient(0deg, #30393E, #30393E), linear-gradient(0deg, #30393E, #30393E), #30393E',
      }}
      {...getHandleProps(id)}
    />
  );
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
interface ITrackProps {
  source: SliderItem;
  target: SliderItem;
  theme: ITheme;
  getTrackProps: GetTrackProps;
}

export const Track: React.SFC<ITrackProps> = ({
  source,
  target,
  theme,
  getTrackProps,
}) => (
  <div
    style={{
      position: 'absolute',
      height: 16,
      zIndex: 1,
      background: theme && theme.background,
      borderRadius: '8px',
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
);

// *******************************************************
// TICK COMPONENT
// *******************************************************
interface ITickProps {
  key: string;
  tick: SliderItem;
  count: number;
}

export const Tick: React.SFC<ITickProps> = ({ tick, count }) => (
  <div>
    <div
      style={{
        position: 'absolute',
        marginTop: 14,
        width: 1,
        height: 5,
        backgroundColor: 'rgb(200,200,200)',
        left: `${tick.percent}%`,
      }}
    />
    <div
      style={{
        position: 'absolute',
        marginTop: 22,
        fontSize: 10,
        textAlign: 'center',
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`,
      }}
    >
      {tick.value}
    </div>
  </div>
);
