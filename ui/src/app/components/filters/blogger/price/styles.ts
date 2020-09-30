import styled from 'styled-components';

export const Price = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  line-height: 20px;
  @media screen and (max-width: 1150px) {
    font-size: 10px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 8px;
  }
  & > .slider {
    width: 23%;
    display: flex;
    flex-direction: column;
    margin-right: 7.7%;
    &:first-child {
      margin-left: 7.7%;
    }
    & > .info {
      display: flex;
      margin-bottom: 12px;
      font-weight: 700;
      & > .title {
        width: 50%;
        text-align: center;
        justify-content: flex-start;
        text-transform: uppercase;
        color: #fff;
      }
      & > .data {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        color: #28b5e1;
      }
    }
  }
`;
