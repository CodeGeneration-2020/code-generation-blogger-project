import React from 'react';
import CityChartContainers from '../../containers/ChartsContainer/City';
import AgeChartContainers from '../../containers/ChartsContainer/Age';
import SexChartContainers from '../../containers/ChartsContainer/sex-chart/Sex';
import * as Styled from './BloggerDetails.style';

const dataCity = [
  { city: 'Kiev', users: 500 },
  { city: 'Lviv', users: 260 },
  { city: 'Kharkiv', users: 142 },
  { city: 'Dnepro(город)', users: 79 },
  { city: 'Tokio', users: 2 },
  { city: 'Druzhkovka', users: 14 },
  { city: 'Lutsk', users: 7 },
  { city: 'London', users: 452 },
];
const dataAge = [
  { age: '13-17', users: 1 },
  { age: '18-24', users: 706 },
  { age: '25-34', users: 902 },
  { age: '35-44', users: 290 },
  { age: '45-54', users: 80 },
  { age: '55-64', users: 1 },
  { age: '64+', users: 20 },
];

const dataSex = {
  men: 400,
  women: 600,
};

const BloggerDetails = ({ ageDetails, cityDetails, sexDetails }) => {
  return (
    <Styled.BloggerDetailsContainer>
      <div className="charts">
        <div className="city">
          <CityChartContainers data={dataCity} />
        </div>
        <div className="sex">
          <SexChartContainers data={dataSex} />
        </div>
      </div>
      <div className="age">
          <AgeChartContainers data={dataAge} />
      </div>
    </Styled.BloggerDetailsContainer>
  );
};

export default BloggerDetails;
