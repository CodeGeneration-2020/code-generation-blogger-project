import styled from 'styled-components';

export const SexChartContainer = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  & > img {
  }
`;
export const Chart = styled.div`
  width: 100%;
  height: 100%;
`;

export const Sex = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 18px;
  & .women {
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    right: 20%;
    & > span {
      color: #bbdefb;
      font-weight: 700;
    }
  }
  & .men {
    display: flex;
    align-items: center;
    flex-direction: column;
    bottom: 0;
    left: 20%;
    & > span {
      font-weight: 700;
      color: #1e88e5;
    }
  }
`;
