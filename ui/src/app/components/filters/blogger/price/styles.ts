import styled from 'styled-components';

export const Price = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 12px;
  & > .slider {
    padding: 0 2%;
    width: 33%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
    & > .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;
      & > .title {
        width: 50%;
        font-size: 8px;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
      }
      & > .data {
        width: 50%;
        font-size: 8px;
        display: flex;
        color: #00b0ff;
      }
    }
  }
`;
