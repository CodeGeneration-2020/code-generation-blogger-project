import styled from 'styled-components';

export const Description = styled.div`
  margin: 15px auto 0;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 416px;
  & > .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 15px;
  }
  & > .text {
    height: 78px;
  }
`;
