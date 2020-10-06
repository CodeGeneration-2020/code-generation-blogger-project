import React from 'react';
import * as Style from './styles';
import BlueButton from '../../shared/BlueButton/button.component';
import GenderChart from './gender';
import CityChart from './city';
import AgeChart from './age';
import AverageRates from './average-rates';

const Statistics = ({ sexInfo, cityInfo, ageInfo, theme }) => {
  const [showCharts, toggleShow] = React.useState<boolean>(false);
  return (
    <Style.StatisticsContainer>
      <div className="btn-show" onClick={() => toggleShow(!showCharts)}>
        <BlueButton style={{ width: '100%', height: '100%' }} theme={theme}>
          <span className="btn-text">
            {showCharts ? 'Hide statistics' : 'Show more statistics'}
          </span>
        </BlueButton>
      </div>

      {showCharts && (
        <>
          <div className="first-line-charts">
            <CityChart data={cityInfo} theme={theme} />
            <GenderChart data={sexInfo} theme={theme} />
          </div>
          <AgeChart data={ageInfo} />
          <AverageRates data={{}} theme={theme} />
        </>
      )}
    </Style.StatisticsContainer>
  );
};

export default Statistics;
