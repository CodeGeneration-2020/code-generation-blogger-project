import React from 'react';
import * as Style from './styles';
//import { v4 as uuidv4 } from 'uuid';

const AverageRates = ({ data }) => {
  return (
    <Style.AverageRatesContainer>
      <div className="coverage">
        <div className="story">
          <div className="block">
            <span className="average">Средний охват</span>
            <span className="title">Stories</span>
          </div>
        </div>
        <div className="post">
          <div className="block">
            <span className="average">Средний охват</span>
            <span className="title">Posts</span>
          </div>
        </div>
      </div>
      <div className="showing">
        <div className="story">
          <div className="block">
            <span className="average">Средний показ</span>
            <span className="title">Stories</span>
          </div>
        </div>
        <div className="post">
          <div className="block">
            <span className="average">Средний показ</span>
            <span className="title">Posts</span>
          </div>
        </div>
      </div>
    </Style.AverageRatesContainer>
  );
};

export default AverageRates;
