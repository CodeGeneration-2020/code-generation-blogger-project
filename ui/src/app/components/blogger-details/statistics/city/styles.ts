import { IPropsTheme } from './../../../../../types/index';
import styled from 'styled-components';

export const CityChartContainer = styled.div``;

export const Chart = styled.div<IPropsTheme>`
  display: flex;
  flex-direction: column;
  & > .data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    line-height: 20px;
    & > .value {
      font-weight: bold;
      font-size: 13.134px;
      color: #ffffff;
    }
    & > .city {
      font-weight: 500;
      font-size: 12.1237px;
      color: ${({ theme }) => theme && theme.color};
    }
  }
  & > .line-chart {
    height: 6px;
    width: 202px;
  }
  margin-bottom: 11px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
