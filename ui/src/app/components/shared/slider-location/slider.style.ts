import { IPropsTheme } from './../../../../types/index';
import styled from 'styled-components';

const imgSize = {
  w: '10px',
  h: '10px',
};

const Arrow = styled.div`
  position: absolute;
  width: ${imgSize.w} !important;
  height: ${imgSize.h} !important;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const SliderPrev = styled(Arrow)`
  left: -5% !important;
`;

export const SliderNext = styled(Arrow)`
  right: -5% !important;
`;

export const SliderContainer = styled.div<IPropsTheme>`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  & .item {
    padding: 0 3px;
    & > .title {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: ${({ theme }) => theme && theme.color};
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 12px;
      border: 1px solid #414d55;
      border-radius: 8px;
      white-space: nowrap;
      &:hover {
        cursor: pointer;
        color: #fff;
        background: ${({ theme }) => theme && theme.background};
      }
    }
  }

  & .slick-slider {
    height: 100%;
    width: 100%;
    & .slick-list {
      height: 100%;
      max-width: 600px;
      @media screen and (max-width: 1150px) {
        max-width: 400px;
      }
      @media screen and (max-width: 800px) {
        max-width: 300px;
      }
      margin-right: 15px !important;
      & .slick-track {
        height: 100%;
        & > div > div {
          height: 100%;
          & > div {
            height: 100% !important;
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center;
          }
        }
      }
    }
  }

  & .slides *:focus {
    outline: 0;
    outline: none;
  }

  & .slick-next:before,
  & .slick-prev:before {
    content: none;
  }
`;
