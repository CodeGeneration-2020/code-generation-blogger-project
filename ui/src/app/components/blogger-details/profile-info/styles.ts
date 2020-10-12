import { IPropsTheme } from './../../../../types/index';
import styled from 'styled-components';

export const ProfileInfo = styled.div<IPropsTheme>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 79px;
`;

export const HeaderProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & .blogger-info {
    display: flex;
    & > .ava {
      margin-right: 11px;
      & > img {
        width: 160px;
        height: 160px;
        margin-right: 30px;
        border-radius: 50%;
        @media screen and (max-width: 1100px) {
          width: 140px;
          height: 140px;
          margin-right: 10px;
        }
        @media screen and (max-width: 900px) {
          width: 130px;
          height: 130px;
        }
      }
    }

    & > .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 42px;
      & > .full-name {
        display: flex;
        flex-direction: column;
        margin-bottom: 7px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: 0.01px;
        color: #ffffff;
        max-width: 240px;
        @media screen and (max-width: 1100px) {
          max-width: 190px;
        }
        & > .name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & > .surname {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media screen and (max-width: 1100px) {
          font-size: 34px;
          line-height: 40px;
        }
        @media screen and (max-width: 900px) {
          line-height: 36px;
          font-size: 28px;
        }
      }
      & > .location {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 20px;
        color: ${({ theme }) => theme && theme.color};
        display: flex;
        max-width: 220px;
        @media screen and (max-width: 1100px) {
          max-width: 180px;
        }
        & > .country {
          margin-right: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & > .city {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media screen and (max-width: 1100px) {
          font-size: 22px;
          line-height: 18px;
        }
        @media screen and (max-width: 900px) {
          font-size: 18px;
        }
      }
    }
  }

  & .insta-icon {
    display: flex;
    align-items: center;
    & > img {
      width: 101px;
      height: 101px;
      @media screen and (max-width: 1100px) {
        width: 85px;
        height: 85px;
      }
      @media screen and (max-width: 900px) {
        width: 75px;
        height: 75px;
      }
    }
  }
`;

export const Metric = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 79px;
  & .price-list {
    display: flex;
    & > .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #ffffff;
      @media screen and (max-width: 1100px) {
        font-size: 16px;
      }
      @media screen and (max-width: 900px) {
        font-size: 15px;
      }
      & > .title {
      }
      & > .icon {
        margin: 33px auto 28px;
      }
      & > .sum {
      }
      &:nth-child(2) {
        padding: 0 7px;
        margin-left: 58px;
        margin-right: 56px;
        @media screen and (max-width: 1100px) {
          margin-left: 40px;
          margin-right: 38px;
        }
        @media screen and (max-width: 900px) {
          margin-left: 34px;
          margin-right: 32px;
        }
      }
      &:nth-child(3) {
        padding: 0 11px;
      }
    }
  }
`;

export const Audience = styled.div<IPropsTheme>`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  & > .result {
    width: 100%;
    padding: 0 30px;
    font-size: 44px;
    line-height: 63px;
    text-align: center;
    color: ${({ theme }) => theme && theme.color};
    margin-bottom: 5px;
    @media screen and (max-width: 1100px) {
      font-size: 38px;
    }
    @media screen and (max-width: 900px) {
      font-size: 32px;
    }
    & > .value {
      margin-right: 5px;
    }
    & > .unit {
    }
  }

  & > .details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 1.04242px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    & > .er {
      display: flex;
      justify-content: flex-start;
      margin-right: 10px;
      & > .count {
        color: ${({ theme }) => theme && theme.color};
        margin-right: 3px;
      }
      & > .text {
        color: #30393e;
      }
    }
    & > .chart {
      height: 9px;
      width: 114px;
      @media screen and (max-width: 1100px) {
        width: 100px;
      }
      @media screen and (max-width: 900px) {
        width: 95px;
      }
    }
  }
`;
