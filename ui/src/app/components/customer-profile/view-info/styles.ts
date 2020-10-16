import styled from 'styled-components';
import { IPropsTheme } from '../../../../types';

export const ProfileInfoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CustomerInfo = styled.div<IPropsTheme>`
  margin-left: 100px;
  margin-bottom: 80px;
  display: flex;
  & > .ava {
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
    justify-content: center;
    & > .fullname {
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
    }
    & > .location {
      display: flex;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 20px;
      color: ${({ theme }) => theme && theme.color};
      & > .country {
        margin-right: 3px;
      }
      & > .city {
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
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0px;
      }
      & > .icon {
        width: 42px;
        display: flex;
        justify-content: center;
        margin-right: 23px;
      }
      & > .content {
        display: flex;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 34px;
        color: ${({ theme }) => theme && theme.color};
      }
    }
  }
`;
