import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  width: 100%;
  & > .btn-show {
    margin: 0 auto;
    width: 187px;
    height: 32px;
    &.btn-text {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
  & > .first-line-charts {
    margin-top: 62px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
  }
`;
