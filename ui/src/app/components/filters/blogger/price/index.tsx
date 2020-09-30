import React from 'react';
import * as Style from './styles';
import CustomSlider from '../../../slider-range-component/Slider';
import { reduceNumber } from '../../../../helpers/reduceNumber';

const PriceFilter = props => {
  return (
    <Style.Price>
      <div className="slider">
        <div className="info">
          <span className="title">POSTS</span>
          {props.pricePost && (
            <span className="data">
              {reduceNumber(props.pricePost[0])}-
              {reduceNumber(props.pricePost[1])}$
            </span>
          )}
        </div>
        <CustomSlider
          domain={[0, 2000]}
          changeHandler={data => props.setFilter(data, 'pricePost')}
        />
      </div>
      <div className="slider">
        <div className="info">
          <span className="title">STORIES</span>
          {props.priceStory && (
            <span className="data">
              {reduceNumber(props.priceStory[0])}-
              {reduceNumber(props.priceStory[1])}$
            </span>
          )}
        </div>
        <CustomSlider
          domain={[0, 2000]}
          changeHandler={data => props.setFilter(data, 'priceStory')}
        />
      </div>
      <div className="slider">
        <div className="info">
          <span className="title">P+S</span>
          {props.pricePS && (
            <span className="data">
              {reduceNumber(props.pricePS[0])}-{reduceNumber(props.pricePS[1])}$
            </span>
          )}
        </div>
        <CustomSlider
          domain={[0, 5000]}
          changeHandler={data => props.setFilter(data, 'pricePS')}
        />
      </div>
    </Style.Price>
  );
};

export default PriceFilter;
