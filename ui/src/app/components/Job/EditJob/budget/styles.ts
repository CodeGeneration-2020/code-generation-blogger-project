import styled from 'styled-components';

export const Budget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .input-budget {
    width: 115px;
    height: 46px;
  }
  & > .text {
    margin-bottom: 5px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
  }
`;
