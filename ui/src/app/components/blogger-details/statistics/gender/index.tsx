import React from 'react';
import PieChart from '../../../shared/pie-chart';
import maleIcon from '../../../../../img/male.svg';
import femaleIcon from '../../../../../img/female.svg';
import { PieContainer } from './styles';
import calculatePercent from '../../../../helpers/calculatePercent';
import withTheme from '../../../../../HOC/withTheme';
import { ITheme } from '../../../../../types';

const Gender: React.FC<{ data; theme?: ITheme }> = ({ data, theme }) => {
  return (
    <PieContainer>
      <div className="statistic">
        <div className="male">
          <img src={maleIcon} alt="icon" className="icon-male" />
          <span className="value">
            {calculatePercent(data.men, data.men + data.women)}%
          </span>
        </div>
        <div className="female">
          <img src={femaleIcon} alt="icon" className="icon-female" />
          <span className="value">
            {calculatePercent(data.women, data.men + data.women)}%
          </span>
        </div>
      </div>
      <PieChart first_value={600} second_value={900} theme={theme} />
    </PieContainer>
  );
};

export default withTheme(Gender);
