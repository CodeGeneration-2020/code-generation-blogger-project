import styled from 'styled-components';
import { IPropsTheme } from '../../../../types';
import { price } from '../../../../consts/responsive';

export const Price = styled.div<IPropsTheme>`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 12px;
  padding-top: 9px;
  & > .slider {
    width: ${price.slider + 'px'};
    display: flex;
    flex-direction: column;
    margin-right: 44px;
    &:last-child {
      margin-right: 0;
    }
    @media screen and (max-width: 1180px) {
      width: ${price.slider * 0.9 + 'px'};
      margin-right: 27px;
    }
    @media screen and (max-width: 980px) {
      width: ${price.slider * 0.8 + 'px'};
      margin-right: 10px;
    }
    & > .info {
      display: flex;
      margin-bottom: 16px;
      & > .title {
        width: 50%;
        text-align: center;
        justify-content: flex-start;
        color: #fff;
        @media screen and (max-width: 980px) {
          font-size: 10px;
        }
      }
      & > .data {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        @media screen and (max-width: 1180px) {
          font-size: 11px;
        }
        @media screen and (max-width: 980px) {
          font-size: 9px;
        }
        color: ${({ theme }) => theme && theme.color};
      }
    }
  }
`;
