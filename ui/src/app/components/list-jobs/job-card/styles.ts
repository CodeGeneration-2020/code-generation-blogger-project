import styled from 'styled-components';

export const JobCardContainer = styled.div`
  max-width: 1170px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  margin: 0 auto;
  padding: 0 120px 0 82px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-bottom: 24px;
  @media screen and (max-width: 1170px) {
    padding: 0 90px 0 60px;
  }
  & > .short-title {
    width: 164px;
    margin-right: 82px;
    background: green;
    @media screen and (max-width: 1170px) {
      margin-right: 60px;
    }
    & > p {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.01px;
      color: #ffffff;
      @media screen and (max-width: 1050px) {
        font-size: 20px;
      }
    }
  }

  & > .budget {
    width: 82px;
    margin-right: 82px;
    background: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 1170px) {
      margin-right: 60px;
    }
    & > .sum {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      color: #d022ed;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media screen and (max-width: 1050px) {
        font-size: 24px;
      }
    }
    & > .text {
      font-family: 'Roboto' sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      color: #ffffff;
    }
  }

  & > .location {
    width: 238px;
    margin-right: 120px;
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1170px) {
      margin-right: 90px;
    }
    & > .country {
      margin-bottom: 7px;
    }
    & > .city {
    }
  }

  & > .tags {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: pink;
    width: 200px;
    & > .first-line {
      margin-bottom: 7px;
    }
    & > .second-line {
    }
  }

  .tag {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #d022ed;
    margin-right: 7px;
    &:last-child {
      margin-right: 0px;
    }
    @media screen and (max-width: 1050px) {
      font-size: 12px;
    }
  }
`;
