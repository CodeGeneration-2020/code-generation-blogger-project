import React from 'react';
import * as Style from './styles';
import LineChart from '../../../shared/line-chart';
import { callculateCountUsersByCities } from '../../../../helpers/calculateCountUsers';

const CityChart = ({ data }) => {
  const cities = callculateCountUsersByCities(data);
  return (
    <Style.CityChartContainer>
      {cities.map(city => {
        return (
          <Style.Chart>
            <div className="data">
              <span className="value">{city.value}%</span>
              <span className="city">{city.attribute}</span>
            </div>
            <div className="line-chart">
              <LineChart er={city.value} />
            </div>
          </Style.Chart>
        );
      })}
    </Style.CityChartContainer>
  );
};

export default CityChart;
