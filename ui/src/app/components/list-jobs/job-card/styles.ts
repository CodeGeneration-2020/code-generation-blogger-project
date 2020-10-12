import styled from 'styled-components';

export const JobCardContainer = styled.div`
  max-width: 1170px;
  height: 190px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  margin: 24px auto 0;
  padding: 47px 120px 41px 81px;
  display: flex;
  @media screen and (max-width: 1170px) {
    padding: 47px 90px 41px 60px;
    margin: 24px 20px 0;
  }
  @media screen and (max-width: 1050px) {
    padding: 47px 45px 41px 30px;
  }
  @media screen and (max-width: 850px) {
    padding: 47px 25px 41px 15px;
  }
  /* job-info */
  & > .job-info {
    display: flex;
    max-width: 326px;
    margin-right: auto;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1050px) {
      max-width: 280px;
    }
    @media screen and (max-width: 900px) {
      max-width: 250px;
    }
    @media screen and (max-width: 800px) {
      max-width: 220px;
    }
    & > .short-title {
      width: 100%;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.01px;
      color: #ffffff;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media screen and (max-width: 1050px) {
        font-size: 20px;
      }
      @media screen and (max-width: 950px) {
        font-size: 18px;
      }
    }

    & > .budget {
      width: 100%;
      display: flex;
      align-items: flex-end;
      & > .text {
        font-family: 'Roboto' sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
        margin-right: 15px;
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
        @media screen and (max-width: 950px) {
          font-size: 20px;
        }
      }
    }
  }
  /* END job-info */

  /* location */
  & > .location {
    width: 238px;
    margin-right: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1170px) {
      margin-right: 90px;
    }
    @media screen and (max-width: 950px) {
      margin-right: 45px;
    }
    & > .country {
      margin-bottom: 7px;
    }
    & > .city {
      width: 100%;
      display: flex;
      justify-content: center;
      overflow-x: auto;
      padding-bottom: 15px;
      .item {
        &:first-child {
          margin-left: 25px;
        }
      }
      ::-webkit-scrollbar {
        width: 200px;
        height: 8px;
        mix-blend-mode: normal;
        opacity: 0.5;
        border: 1px solid #d022ed;
        box-sizing: border-box;
        border-radius: 4px;
        transform: rotate(90deg);
      }
      ::-webkit-scrollbar-thumb {
        height: 8px;
        background: linear-gradient(270deg, #9c1abc 0%, #d022ed 100%);
        border-radius: 4px;
        transform: rotate(90deg);
      }
    }
  }
  /*End location */

  /* tags */
  & > .tags {
    width: 200px;
    @media screen and (max-width: 800px) {
      width: 180px;
    }
    & > .list-tags {
      margin-top: 40px;
      width: 100%;
      display: flex;
      overflow-x: auto;
      padding-bottom: 15px;
      ::-webkit-scrollbar {
        width: 200px;
        height: 8px;
        mix-blend-mode: normal;
        opacity: 0.5;
        border: 1px solid #d022ed;
        box-sizing: border-box;
        border-radius: 4px;
        transform: rotate(90deg);
      }
      ::-webkit-scrollbar-thumb {
        /* width: 112px; */
        height: 8px;
        background: linear-gradient(270deg, #9c1abc 0%, #d022ed 100%);
        border-radius: 4px;
        transform: rotate(90deg);
      }
    }
  }
  /* End tags */

  .item {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #d022ed;
    margin-right: 7px;
    white-space: nowrap;
    &:last-child {
      margin-right: 0px;
    }
    @media screen and (max-width: 1050px) {
      font-size: 12px;
    }
  }
`;
