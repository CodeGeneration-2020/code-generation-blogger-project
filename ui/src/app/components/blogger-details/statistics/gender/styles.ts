import styled from 'styled-components';

export const PieContainer = styled.div`
  position: relative;
  & > .statistic {
    position: absolute;
    top: 65px;
    left: 72px;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    & > .male {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      & > .icon-male {
        margin-right: 7px;
        width: 24px;
        height: 24px;
      }
      & > .value {
      }
    }
    & > .female {
      display: flex;
      align-items: center;
      & > .icon-female {
        width: 19px;
        height: 34px;
        margin-right: 12px;
      }
      & > .value {
      }
    }
  }
`;
