import React from 'react';
import * as Style from './styles';
import CustomSlider from '../../../SliderRangeComponent/Slider';
import { reduceNumber } from '../../../../helpers/reduceNumber';

const Subscribers = props => {
  return (
    <Style.Subscribers>
      <div className="total">
        <CustomSlider
          domain={[0, 10000000]}
          changeHandler={data => props.setFilter(data, 'subscribers')}
        />
        <div className="data-slider">
          <span className="text">Total</span>
          {props.subscribers && (
            <span className="result">
              {reduceNumber(props.subscribers[0])}-
              {reduceNumber(props.subscribers[1])}
            </span>
          )}
        </div>
      </div>
      <div className="engagement-rate">
        <CustomSlider
          domain={[0, 100]}
          changeHandler={data => props.setFilter(data, 'er')}
        />
        <div className="data-slider">
          <span className="text">ER</span>
          {props.er && (
            <span className="result">
              {props.er[0]}-{props.er[1]}%
            </span>
          )}
        </div>
      </div>
    </Style.Subscribers>
  );
};

export default Subscribers;
