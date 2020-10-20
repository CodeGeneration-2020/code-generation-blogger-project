import styled from 'styled-components';
import { IPropsTheme } from '../../../../types';

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CustomerInfo = styled.div<IPropsTheme>`
  margin-left: 100px;
  margin-bottom: 80px;
  display: flex;
  & > .ava {
    display: flex;
    align-items: center;
    margin-right: 41px;
    & > img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
    }
  }
  & > .info {
    display: flex;
    flex-direction: column;
    width: 180px;
    & > .item {
      height: 32px;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export const ContactInfo = styled.div<IPropsTheme>`
  margin-left: 53px;
  margin-right: 56px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  & > .title {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 37px;
  }
  & > .contacts {
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    & > .item {
      display: flex;
      align-items: flex-start;
      &:first-child {
        align-items: center;
      }
      height: 46px;
      margin-bottom: 26px;
      &:last-child {
        margin-bottom: 0px;
      }
      & > .icon {
        width: 42px;
        height: 100%;
        display: flex;
        justify-content: center;
        margin-right: 23px;
      }
      & > .content {
        width: 208px;
        display: flex;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 34px;
        color: ${({ theme }) => theme && theme.color};
      }
      .error {
        color: blue;
      }
    }
  }
`;

export const ListJobs = styled.div<IPropsTheme>``;
