import React from 'react';
import * as Style from './styles';
import withTheme from '../../../../../HOC/withTheme';
import { ITheme } from '../../../../../types';

const AverageRates: React.FC<{ data; theme?: ITheme }> = ({ data, theme }) => {
  return (
    <Style.AverageRatesContainer theme={theme}>
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

export default withTheme(AverageRates);
