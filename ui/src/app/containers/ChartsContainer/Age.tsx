import React from 'react';
import BarChart from '../../components/shared/bar-chart/BarChart';

const AgeChart = data => {
  const usersCount = data.data.reduce((sum, current) => {
    return sum + current.users;
  }, 0);
  const cityData = data.data.map(c => ({
    attribute: c.age,
    value: (c.users * 100) / usersCount,
  }));
  return <BarChart data={cityData} />;
};

export default AgeChart;
