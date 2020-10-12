import React from 'react';
import AnimatedPieHooks from './animated-pie-hooks';
import withTheme from '../../../../HOC/withTheme';
import { ITheme } from '../../../../types';

const PieChart: React.FC<{
  first_value: number;
  second_value: number;
  theme?: ITheme;
}> = ({ first_value, second_value, theme }) => {
  return (
    <AnimatedPieHooks
      data={[
        { data: 'first_value', value: first_value },
        { data: 'second_value', value: second_value },
      ]}
      width={200}
      height={200}
      innerRadius={65}
      outerRadius={100}
      theme={theme}
    />
  );
};

export default withTheme(PieChart);
