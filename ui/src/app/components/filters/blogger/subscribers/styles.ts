import styled from 'styled-components';

export const Subscribers = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 2.5em;
  display: flex;
  font-size: 9px;
  text-transform: uppercase;
  & > .total {
    width: 50%;
    margin: 0 5%;
  }
  & > .engagement-rate {
    margin: 0 5%;
    width: 50%;
  }

  .data-slider {
    display: flex;
    justify-content: space-around;
    & > .text {
      color: #fff;
    }
    & > .result {
      color: #00b0ff;
    }
  }
`;
