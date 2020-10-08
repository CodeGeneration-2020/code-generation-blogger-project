import React from 'react';
import * as Style from './styles';
import LineChart from '../../../shared/line-chart';
import { callculateCountUsersByCities } from '../../../../helpers/calculateCountUsers';
import withTheme from '../../../../../HOC/withTheme';
import { ITheme } from '../../../../../types';

const CityChart: React.FC<{ data; theme?: ITheme }> = ({ data, theme }) => {
  const cities = callculateCountUsersByCities(data);
  return (
    <Style.CityChartContainer>
      {cities.map(city => {
        return (
          <Style.Chart theme={theme}>
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

export default withTheme(CityChart);
