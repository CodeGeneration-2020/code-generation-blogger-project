import styled from 'styled-components';

const imgSize = {
  w: '10px',
  h: '10px',
};

const Arrow = styled.div`
  position: absolute;
  width: ${imgSize.w} !important;
  height: ${imgSize.h} !important;
  & img {
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

export const SliderContainer = styled.div`
  width: 100%;
  height: 74px;
  padding: 0 5%;
  border: 1px solid #414d55;
  border-radius: 8px;
  & .item {
    & > .title {
      width: 95%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #28b5e1;
      &:hover {
        cursor: pointer;
        color: #fff;
        background: #28b5e1;
        border-radius: 8px;
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
