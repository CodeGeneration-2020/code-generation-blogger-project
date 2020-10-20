import { IPropsTheme } from './../../../../types/index';
import styled from 'styled-components';

export const JobContainer = styled.div`
  width: 100%;
`;

export const JobInfo = styled.div<IPropsTheme>`
  display: flex;
  flex-direction: column;
  /* header-info */
  & > .header-info {
    display: flex;
    justify-content: center;
    margin-bottom: 58px;
    margin-left: 62px;
    margin-right: 50px;
    & > .short-title {
      width: 164px;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.01px;
      color: #ffffff;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow-y: hidden;
      margin-right: 132px;
    }
    & > .budget {
      display: flex;
      flex-direction: column;
      & > .sum {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 40px;
        text-align: center;
        color: ${({ theme }) => theme && theme.color};
      }
      & > .text {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
      }
    }
  }
  /*END header-info */

  /* tags */
  & > .tags {
    margin: 0 65px 42px 60px;
    display: flex;
    justify-content: center;
  }
  /* END tags */

  /* location */
  & > .location {
    margin: 0 127px 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .countries {
      margin-bottom: 7px;
    }
    & > .cities {
    }
  }
  /* END location */

  .item {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme && theme.color};
    margin-right: 7px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const Description = styled.div<IPropsTheme>`
  margin: 0 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  & > .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
  }
  & > .text {
    max-width: 410px;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    color: ${({ theme }) => theme && theme.color};
  }
`;

export const Connection = styled.div<IPropsTheme>`
  margin: 0 50px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  & > .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
  }
  & > .contacts {
    display: flex;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #d022ed;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      margin: 0 auto;
    }
    & > .item {
      display: flex;
      margin-right: 24px;
      @media screen and (max-width: 900px) {
        margin-right: 12px;
      }
      @media screen and (max-width: 767px) {
        margin-bottom: 10px;
      }
      &:last-child {
        margin-right: 0px;
        margin-bottom: 0px;
      }
      & > .icon {
        margin-right: 14px;
      }
      & > .content {
        color: ${({ theme }) => theme && theme.color};
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const Attachments = styled.div`
  margin: 0 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 15px;
  }
  & > .list {
    display: flex;
    & > .item {
      margin-right: 14px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;

export const Rating = styled.div`
  width: 570px;
  margin: 57px auto 0;
  padding-top: 30px;
  padding-bottom: 33px;
  border: 1px solid #414d55;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  @media screen and (max-width: 850px) {
    width: 500px;
  }
  & > .user-info {
    margin-left: 38px;
    display: flex;
    margin-right: 21px;
    width: 155px;
    & > .ava {
      margin-right: 15px;
      & > img {
        width: 59px;
        height: 59px;
        border-radius: 50%;
      }
    }
    & > .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > .fullname {
        display: flex;
        flex-direction: column;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.00364821px;
        color: #ffffff;
        margin-bottom: 6px;
      }
      & > .location {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 7px;
        color: #d022ed;
      }
    }
  }
  & > .insta-icon {
    display: flex;
    align-items: center;
    margin-right: 35px;
  }
  & > .score {
    display: flex;
    align-items: center;
    & > .star {
      margin-right: 14px;
      width: 37px;
      height: 35px;
      @media screen and (max-width: 850px) {
        margin-right: 10px;
        width: 27px;
        height: 25px;
      }
      & :last-child {
        margin-right: 0px;
      }
    }
  }
`;

export const Comments = styled.div`
  margin: 50px auto 0;
  width: 440px;
  min-height: 300px;
  @media screen and (max-width: 850px) {
    width: 380px;
  }
`;
