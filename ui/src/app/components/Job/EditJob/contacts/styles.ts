import { IPropsTheme } from './../../../../../types/index';
import styled from 'styled-components';

export const Contacts = styled.div<IPropsTheme>`
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & > .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 24px;
  }
  & > .profile-contacts {
    display: flex;
    margin-bottom: 13px;
    & > .item {
      display: flex;
      margin-right: 24px;
      &:last-child {
        margin-right: 0px;
      }
      & > .icon {
        margin-right: 14px;
      }
      & > .content {
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        color: ${({ theme }) => theme && theme.color};
      }
    }
  }
  & > .additional-contact {
    width: 100%;
    display: flex;
    & > .icon {
      margin-top: 5px;
      margin-right: 14px;
    }
    & > .input-contact {
      width: 100%;
    }
  }
`;
