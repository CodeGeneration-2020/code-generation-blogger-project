import React from 'react';
import PieChart from '../../../components/shared/PieChart';
import * as Styled from './SexChart.style';
import InformationIcon from '../../../../img/information.png';

const SexPieChart = ({ data }) => {
  return (
    <Styled.SexChartContainer>
      <Styled.Header>
        <span>Пол</span>
        <img width="20" height="20" src={InformationIcon} alt="i" />
      </Styled.Header>
      <Styled.Chart>
        <PieChart data={[data.women, data.men]} />
      </Styled.Chart>
      <Styled.Sex>
        <div className="men">
          <span>{(100 / (data.women + data.men)) * data.men}%</span>
          <div>Мужчины</div>
        </div>
        <div className="women">
          <span>{(100 / (data.women + data.men)) * data.women}%</span>
          <div>Женщины</div>
        </div>
      </Styled.Sex>
    </Styled.SexChartContainer>
  );
};

export default SexPieChart;
