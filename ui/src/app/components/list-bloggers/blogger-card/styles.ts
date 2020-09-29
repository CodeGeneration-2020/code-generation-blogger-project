import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  margin-bottom: 24px;
`;
export const PersonInfo = styled.div`
  width: 17.5%;
  margin: 0 6%;
  padding: 55px 0;
  display: flex;
  & > .avatar {
    width: 53%;
    display: flex;
    justify-content: center;
    margin-right: 2%;
    @media screen and (max-width: 950px) {
      padding-left: 0;
    }
    align-items: center;
    & > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      @media screen and (max-width: 1150px) {
        width: 67px;
        height: 67px;
      }
    }
  }

  & > .info {
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: center;
    & > .full-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      line-height: 20px;
      letter-spacing: 0.01px;
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 2px;
      @media screen and (max-width: 1150px) {
        font-size: 14px;
      }
      @media screen and (max-width: 950px) {
        font-size: 12px;
      }
      @media screen and (max-width: 800px) {
        font-size: 11px;
      }
      & > .name {
      }
      & > .surname {
      }
    }

    & > .location {
      width: 100%;
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      color: #28b5e1;
      @media screen and (max-width: 1150px) {
        font-size: 10px;
      }
      @media screen and (max-width: 950px) {
        font-size: 9px;
      }
      @media screen and (max-width: 800px) {
        font-size: 8px;
      }

      & > .country {
        margin-right: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & > .city {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const Audience = styled.div`
  width: 10%;
  margin-right: 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins' sans-serif;
  font-style: normal;
  font-weight: bold;

  & > .result {
    width: 100%;
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: #28b5e1;
    margin-bottom: 2px;
    @media screen and (max-width: 1150px) {
      font-size: 24px;
    }
    & > .value {
      margin-right: 4px;
    }
    & > .unit {
    }
  }

  & > .details {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 8px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.666667px;
    text-transform: uppercase;
    & > .er {
      display: flex;
      margin-right: 6%;
      width: 36%;
      & > .count {
        color: #28b5e1;
        margin-right: 2px;
      }
      & > .text {
        color: #30393e;
      }
      @media screen and (max-width: 1150px) {
        font-size: 7px;
        margin-top: 2px;
      }
      @media screen and (max-width: 950px) {
        font-size: 6px;
      }
    }
    & > .chart {
      height: 6px;
      width: 58%;
    }
  }
`;

export const PriceList = styled.div`
  width: 19%;
  padding-top: 44px;
  margin-right: 6%;
  font-family: 'Roboto' sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  @media screen and (max-width: 1150px) {
    font-size: 10px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 8px;
  }
  & > .post {
    width: 24%;
    & > .icon {
      text-align: center;
      margin-top: 27px;
      margin-bottom: 22px;
      & > img {
        width: 18.2px;
        height: 22.3px;
      }
    }
  }
  & > .story {
    width: 28%;
    & > .icon {
      text-align: center;
      margin-top: 23px;
      margin-bottom: 19px;
      & > img {
        width: 18.2px;
        height: 29.3px;
      }
    }
  }
  & > .post-story {
    width: 48%;
    & > .icon {
      text-align: center;
      margin-top: 23px;
      margin-bottom: 19px;
      & > img {
        width: 51.2px;
        height: 29.3px;
      }
    }
  }

  .title {
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
  }
  .sum {
    text-align: center;
    color: #ffffff;
  }
`;

export const TagsList = styled.div`
  width: 23.5%;
  margin-right: 6%;
  padding: 58px 0;
  & > .tags {
    width: 100%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    color: #28b5e1;
    font-size: 12px;
    @media screen and (max-width: 1150px) {
      font-size: 10px;
    }
    @media screen and (max-width: 850px) {
      font-size: 8px;
    }
    & > .first-line {
      display: flex;
      justify-content: center;
      margin-bottom: 14px;
      & > .tag {
        &:first-child {
          margin-right: 6%;
        }
      }
    }
    & > .second-line {
      display: flex;
      justify-content: center;
      & > .tag {
        margin-right: 6%;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
