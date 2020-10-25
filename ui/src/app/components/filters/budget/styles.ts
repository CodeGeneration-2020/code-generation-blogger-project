import styled from 'styled-components';

export const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  & > .budget {
    width: 188px;
    display: flex;
    flex-direction: column;
    & > .data {
      width: 100%;
      display: flex;
      margin-bottom: 15px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      & > .text {
        width: 48%;
        display: flex;
        justify-content: flex-end;
        color: #fff;
        margin-right: 19px;
      }
      & > .sum {
        width: 52%;
        display: flex;
        justify-content: flex-start;
        color: #d022ed;
      }
    }
    & > .range {
      width: 100%;
    }
  }
`;
