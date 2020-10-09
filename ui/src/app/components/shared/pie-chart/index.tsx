import React from 'react';
import AnimatedPieHooks from './animated-pie-hooks';

const PieChart = ({ first_value, second_value }) => {
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
    />
  );
};

export default PieChart;
