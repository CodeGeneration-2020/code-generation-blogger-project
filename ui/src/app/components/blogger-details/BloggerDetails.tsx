import React from 'react';
import CityChartContainers from '../../containers/ChartsContainer/City';
import AgeChartContainers from '../../containers/ChartsContainer/Age';
import SexChartContainers from '../../containers/ChartsContainer/sex-chart/Sex';
import * as Styled from './BloggerDetails.style';
import {
  IAgeDetails,
  ICityDetails,
  ISexDetails,
} from '../../../types/components';

const BloggerDetails: React.FC<{
  ageDetails: Array<IAgeDetails>;
  cityDetails: Array<ICityDetails>;
  sexDetails: ISexDetails;
}> = ({ ageDetails, cityDetails, sexDetails }) => {
  return (
    <Styled.BloggerDetailsContainer>
      <div className="charts">
        <div className="city">
          <CityChartContainers data={cityDetails} />
        </div>
        <div className="sex">
          <SexChartContainers data={sexDetails} />
        </div>
      </div>
      <div className="age">
        <AgeChartContainers data={ageDetails} />
      </div>
    </Styled.BloggerDetailsContainer>
  );
};

export default BloggerDetails;
