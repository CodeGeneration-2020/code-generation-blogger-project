import React from 'react';
import PieChart from '../../../shared/pie-chart';
import maleIcon from '../../../../../img/male.svg';
import femaleIcon from '../../../../../img/female.svg';
import { PieContainer } from './styles';

const Gender = ({ data }) => {
  const sumData = data.men + data.women;
  const maleProcent = Math.round((data.men / sumData) * 100);
  const femaleProcent = Math.round((data.women / sumData) * 100);
  return (
    <PieContainer>
      <div className="statistic">
        <div className="male">
          <img src={maleIcon} alt="icon" className="icon-male" />
          <span className="value">{maleProcent}%</span>
        </div>
        <div className="female">
          <img src={femaleIcon} alt="icon" className="icon-female" />
          <span className="value">{femaleProcent}%</span>
        </div>
      </div>
      <PieChart first_value={600} second_value={900} />
    </PieContainer>
  );
};

export default Gender;
