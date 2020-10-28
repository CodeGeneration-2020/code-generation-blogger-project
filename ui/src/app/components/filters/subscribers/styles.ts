import styled from 'styled-components';
import { IPropsTheme } from '../../../../types';
import { subscribers } from '../../../../consts/responsive';

export const Subscribers = styled.div<IPropsTheme>`
  width: 100%;
  height: 100%;
  padding: 11px 36px 16px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  line-height: 20px;
  font-weight: 700;
  @media screen and (max-width: 1180px) {
    padding: 11px 20px 16px;
  }
  @media screen and (max-width: 980px) {
    padding: 11px 6px 16px;
  }
  & > .total {
    width: ${subscribers.item + 'px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1180px) {
      width: ${subscribers.item * 0.9 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${subscribers.item * 0.8 + 'px'};
    }
  }
  & > .engagement-rate {
    width: ${subscribers.item + 'px'};
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1180px) {
      width: ${subscribers.item * 0.9 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${subscribers.item * 0.8 + 'px'};
    }
    & > .text {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #414d55;
      @media screen and (max-width: 1180px) {
        font-size: 10px;
      }
      @media screen and (max-width: 980px) {
        font-size: 9px;
      }
    }
  }
  .range-slider {
    height: 16px;
    width: ${subscribers.slider + 'px'};
    @media screen and (max-width: 1180px) {
      width: ${subscribers.slider * 0.9 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${subscribers.slider * 0.8 + 'px'};
    }
  }

  .data {
    margin-top: 16px;
    width: 100%;
    display: flex;
    & > .text {
      display: flex;
      justify-content: flex-end;
      width: 40%;
      color: #fff;
      @media screen and (max-width: 980px) {
        font-size: 10px;
      }
    }
    & > .result {
      width: 60%;
      text-align: center;
      color: ${({ theme }) => theme && theme.color};
      @media screen and (max-width: 1180px) {
        font-size: 11px;
      }
      @media screen and (max-width: 980px) {
        font-size: 9px;
      }
    }
  }
`;
