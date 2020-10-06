import React from 'react';
import * as Style from './styles';
import {
  first_group,
  second_group,
} from '../../../../../consts/age-categories';
import { v4 as uuidv4 } from 'uuid';
import BarChart from '../../../shared/bar-chart/BarChart';
import { callculateCountUsersByAge } from '../../../../helpers/calculateCountUsers';

const AgeChart = ({ data }) => {
  return (
    <Style.AgeChartContainer>
      <div className="chart">
        <BarChart data={callculateCountUsersByAge(data)} />
      </div>
      <div className="categories">
        <div className="first-group">
          {first_group.map(c => (
            <Style.Category background={c.color} key={uuidv4()}>
              <span className="title">{c.title}</span>
            </Style.Category>
          ))}
        </div>
        <div className="second-group">
          {second_group.map(c => (
            <Style.Category background={c.color} key={uuidv4()}>
              <span className="title">{c.title}</span>
            </Style.Category>
          ))}
        </div>
      </div>
    </Style.AgeChartContainer>
  );
};

export default AgeChart;
