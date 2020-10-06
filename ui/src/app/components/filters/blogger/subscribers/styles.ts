import styled from 'styled-components';
import { IPropsTheme } from '../../../../../types';

export const Subscribers = styled.div<IPropsTheme>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 1150px) {
    font-size: 10px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 8px;
  }
  & > .total {
    width: 33.3333%;
    margin-right: 11.1111%;
    display: flex;
    flex-direction: column;
  }
  & > .engagement-rate {
    width: 33.3333%;
    display: flex;
    flex-direction: column;
  }
  .range-slider {
    height: 16px;
  }

  .data-slider {
    margin-top: 14px;
    width: 100%;
    display: flex;
    /* justify-content: space-around; */
    & > .text {
      width: 50%;
      text-align: center;
      color: #fff;
    }
    & > .result {
      width: 50%;
      text-align: center;
      text-transform: lowercase;
      color: ${({ theme }) => theme && theme.color};
    }
    padding-bottom: 36px;
  }
`;
