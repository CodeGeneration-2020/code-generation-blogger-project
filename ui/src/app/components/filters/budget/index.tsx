import React from 'react';
import * as Style from './styles';
import CustomSlider from '../../slider-range-component/Slider';
import { reduceNumber } from '../../../helpers/reduceNumber';

const BudgetFilter = props => {
  return (
    <Style.Price>
      <div className="budget">
        <div className="data">
          <span className="text">Budget</span>
          {props.budget && (
            <span className="sum">
              {reduceNumber(props.budget[0]).value +
                reduceNumber(props.budget[0]).unit}
              -
              {reduceNumber(props.budget[1]).value +
                reduceNumber(props.budget[1]).unit}
              $
            </span>
          )}
        </div>
        <div className="range">
          <CustomSlider
            domain={[0, 20000]}
            changeHandler={data => props.setFilter(data, 'budget')}
          />
        </div>
      </div>
    </Style.Price>
  );
};

export default BudgetFilter;
