import React from 'react';
import * as Style from './styles';
import CustomSlider from '../../../SliderRangeComponent/Slider';

const PriceFilter = props => {
  return (
    <Style.Price>
      <div className="slider">
        <div className="info">
          <span className="title">POSTS</span>
          {props.pricePost && (
            <span className="data">
              {props.pricePost[0]}-{props.pricePost[1]}$
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
              {props.priceStory[0]}-{props.priceStory[1]}$
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
              {props.pricePS[0]}-{props.pricePS[1]}$
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
