import React from 'react';
import {connect, useDispatch} from 'react-redux';
import CityChartContainers from '../../containers/ChartsContainer/City';
import AgeChartContainers from '../../containers/ChartsContainer/Age';
import SexChartContainers from '../../containers/ChartsContainer/sex-chart/Sex';
import * as Styled from './BloggerDetails.style';
import {
  IAgeDetails,
  ICityDetails,
  ISexDetails,
} from '../../../types/components';
import  * as BloggerActions from '../../../store/blogger/actions';

const BloggerDetails: React.FC<{match?:any,idBlogger?:number,getBlogger:any,sexInfo:ISexDetails,cityInfo:ICityDetails,ageInfo:ISexDetails}> = ({match,idBlogger,getBlogger,sexInfo,cityInfo,ageInfo}) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  React.useEffect(()=>{
    const ig_id = match ? match.params.id : idBlogger;
      console.log(ig_id)
      getBlogger(ig_id);
  },[match,idBlogger])
  
  
 
  return (
    <Styled.BloggerDetailsContainer>
      <Styled.HeaderProfile>
          <div className="avatar">
            <span>Blogger's avatar</span>
          </div>
          <div className="blogger-info">
            <div className="fs-name">
                <span className="first-name">Ralf</span>
                <span className="surname">Ciccone</span>
            </div>
            <div className="location">
                <span className="country">Ukraine,</span>
                <span className="city">Kharkiv</span>
            </div>
          </div>
          <div className="icon">
              <span>Instagram icon</span>
          </div>
      </Styled.HeaderProfile>
      <Styled.Characteristics>
          <div className="price">
              <div className="single-price">
                <span className="post">Post: 30$</span>
                <span className="story"> Story: 10$</span>
              </div>
              <div className="total-price">
                  <span>Post + Story: 35$</span>
              </div>
          </div>
          <div className="analytics">
              <div className="followers"><span>Followers: 1000</span></div>
              <div className="engagement-rate"><span>ER: 20%</span></div>
          </div>
      </Styled.Characteristics>
      <div className="toggle-charts">
        <button onClick={()=>setToggle(!toggle)}
         >
        {toggle ? 'Hide statistic' : 'Show more statistic'}
        </button>
      </div>
       {toggle && cityInfo && sexInfo && ageInfo ?
       <> 
      <Styled.Charts>
        <div className="header">
          <span>Аудитория</span>
        </div>
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
      </Styled.Charts>
      <Styled.Statistic>
        <div className="avg-impression">
            <div className="post"></div>
            <div className="story"></div>
        </div>
        <div className="avg-coverage">
            <div className="post"></div>
            <div className="story"></div>
        </div>
      </Styled.Statistic>
      </>
      :null}
    </Styled.BloggerDetailsContainer>
  );
};

export default connect(state => {
  const { BLOGGER_REDUCER }:any = state;
  return {
    cityInfo:BLOGGER_REDUCER.bloggerInfo.dataCity,
    sexInfo:BLOGGER_REDUCER.bloggerInfo.dataSex,
    ageInfo:BLOGGER_REDUCER.bloggerInfo.dataAge,
  };
  }, {
    getBlogger: BloggerActions.ActionCreators.getBloggerById,
  })(BloggerDetails)
