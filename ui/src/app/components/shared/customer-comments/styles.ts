import { IPropsTheme } from './../../../../types/index';
import styled from 'styled-components';

export const ListCustomerContainer = styled.div<IPropsTheme>`
  width: 100%;
  height: 100%;
  .comment {
    display: flex;
    margin-bottom: 50px;
    &:last-child {
      margin-bottom: 0px;
    }
    & > .user-info {
      display: flex;
      & > .ava {
        margin-right: 20px;
        & > img {
          width: 60px;
          height: 60px;
        }
      }
      & > .info {
        display: flex;
        flex-direction: column;
        margin-right: 46px;
        & > .fullname {
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: #ffffff;
        }
        & > .score {
          .star {
            width: 13px;
            height: 12px;
            margin-right: 5px;
            &:last-child {
              margin-right: 0px;
            }
          }
        }
      }
    }
    & > .text {
      max-width: 222px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 15px;
      color: ${({ theme }) => theme && theme.color};
      margin: auto 0;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow-y: hidden;
    }
  }
`;
