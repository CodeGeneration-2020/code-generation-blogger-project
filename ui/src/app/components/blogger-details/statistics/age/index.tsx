import React from 'react';
import * as Style from './styles';
import {
  first_group,
  second_group,
} from '../../../../../consts/age-categories';
import { v4 as uuidv4 } from 'uuid';
import BarChart from '../../../shared/bar-chart/BarChart';

const AgeChart = ({ data }) => {
  const usersCount = data.reduce((sum, current) => {
    return sum + current.users;
  }, 0);
  const ageData = data.map(c => ({
    attribute: c.key,
    value: Math.round((c.users * 100) / usersCount),
  }));

  return (
    <Style.AgeChartContainer>
      <div className="chart">
        <BarChart data={ageData} />
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
