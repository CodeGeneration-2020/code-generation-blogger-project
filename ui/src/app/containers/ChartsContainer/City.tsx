import React from 'react';
import BarChart from '../../components/shared/BarChart';

function sortByCountUser(dataUsers) {
  dataUsers.sort((a, b) => (a.value < b.value ? 1 : -1));
}

const CityChart = ({ data }) => {
  const usersCount = data.reduce((sum, current) => {
    return sum + current.users;
  }, 0);
  const cityData = data.map(c => ({
    attribute: c.city,
    value: (c.users * 100) / usersCount,
  }));
  sortByCountUser(cityData);
  return <BarChart data={cityData.slice(0, 5)} />;
};

export default CityChart;
