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
import UsersService from '../../../services/users.service';

const BloggerDetails: React.FC<{match:any}> = ({match}) => {
  const [cityInfo,setCityInfo] = React.useState<ICityDetails>();
  const [sexInfo,setSexInfo] = React.useState<ISexDetails>(); 
  const [ageInfo,setAgeInfo] = React.useState<IAgeDetails>();

  React.useEffect(()=>{
    const queryStringId = match.params.id;
    const getBloggerDetails = async(bloggerId)=>{
      const response =  await UsersService.getBloggerById(bloggerId);
      const {dataAge,dataCity,dataSex} = response.data;
      setCityInfo(dataCity);
      setSexInfo(dataSex);
      setAgeInfo(dataAge);
    }
    getBloggerDetails(queryStringId);
  },[])
  
  
 
  return (
    <Styled.BloggerDetailsContainer>
       {cityInfo && sexInfo && ageInfo ? 
       <>
      <div className="charts">
        <div className="city">
          <CityChartContainers data={cityInfo} />
        </div>
        <div className="sex">
          <SexChartContainers data={sexInfo} />
        </div>
      </div>
      <div className="age">
        <AgeChartContainers data={ageInfo} />
      </div>
      </>
      :<div>...Loading</div>}
    </Styled.BloggerDetailsContainer>
  );
};

export default BloggerDetails;
