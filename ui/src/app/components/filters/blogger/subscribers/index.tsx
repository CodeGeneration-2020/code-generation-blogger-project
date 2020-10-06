import React from 'react';
import * as Style from './styles';
import CustomSlider from '../../../slider-range-component/Slider';
import { reduceNumber } from '../../../../helpers/reduceNumber';

const Subscribers = props => {
  return (
    <Style.Subscribers theme={props.theme}>
      <div className="total">
        <div className="range-slider">
          <CustomSlider
            theme={props.theme}
            domain={[0, 10000000]}
            changeHandler={data => props.setFilter(data, 'subscribers')}
          />
        </div>
        <div className="data-slider">
          <span className="text">Total</span>
          <span className="result">
            {props.subscribers && (
              <>
                {reduceNumber(props.subscribers[0]).value +
                  reduceNumber(props.subscribers[0]).unit}
                -
                {reduceNumber(props.subscribers[1]).value +
                  reduceNumber(props.subscribers[1]).unit}
              </>
            )}
          </span>
        </div>
      </div>
      <div className="engagement-rate">
        <div className="range-slider">
          <CustomSlider
            theme={props.theme}
            domain={[0, 100]}
            changeHandler={data => props.setFilter(data, 'er')}
          />
        </div>
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
