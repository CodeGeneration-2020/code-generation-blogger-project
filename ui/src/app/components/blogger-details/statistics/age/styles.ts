import styled from 'styled-components';

export const AgeChartContainer = styled.div`
  width: 100%;
  height: 222px;
  margin-top: 50px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 55px;
  @media screen and (max-width: 900px) {
    padding: 0 25px;
  }
  & > .chart {
    display: flex;
    align-items: center;
    width: 251px;
    height: 208px;
    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 19px;
    color: #ffffff;
  }
  & > .categories {
    display: flex;
    flex-direction: column;
    width: 161px;
    & > .first-group {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    & > .second-group {
      display: flex;
      justify-content: space-between;
    }
    @media screen and (max-width: 900px) {
      width: 140px;
    }
  }
`;

export const Category = styled.div<{ background }>`
  width: 46.72px;
  height: 23.96px;
  background: ${({ background }) => background && background};
  border-radius: 4.79192px;
  text-align: center;
  & > .title {
    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.59899px;
    text-transform: uppercase;
    color: #ffffff;
  }
  @media screen and (max-width: 900px) {
    width: 40px;
  }
`;
