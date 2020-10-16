import styled from 'styled-components';
import { IPropsTheme } from '../../../../../types';

export const JobCardContainer = styled.div<IPropsTheme>`
  margin: 0 auto 45px;
  padding: 45px 65px 42px;
  width: 630px;
  min-height: 508px;
  border: 1px solid #414d55;
  border-radius: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
  & > .title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.01px;
    color: #ffffff;
    margin-bottom: 19px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
  }
  & > .budget {
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
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
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
  & > .view-button {
    display: flex;
    justify-content: center;
    .text {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      text-align: center;
      color: #fff;
    }
  }
  & > .tags {
    width: 75%;
    display: flex;
    justify-content: center;
    margin: 0 auto 35px;
    & > .list {
      display: flex;
      overflow-x: auto;
      padding-bottom: 15px;
      ::-webkit-scrollbar {
        width: 200px;
        height: 8px;
        mix-blend-mode: normal;
        opacity: 0.5;
        border: 1px solid ${({ theme }) => theme && theme.color};
        box-sizing: border-box;
        border-radius: 4px;
        transform: rotate(90deg);
      }
      ::-webkit-scrollbar-thumb {
        height: 8px;
        background: ${({ theme }) => theme && theme.background};
        border-radius: 4px;
        transform: rotate(90deg);
      }
    }
  }

  & > .location {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 0 auto 35px;
    & > .countries {
      display: flex;
      justify-content: center;
      margin-bottom: 7px;
    }
    & > .cities {
      display: flex;
      justify-content: center;
      & > .list {
        display: flex;
        overflow-x: auto;
        padding-bottom: 15px;
        ::-webkit-scrollbar {
          width: 200px;
          height: 8px;
          mix-blend-mode: normal;
          opacity: 0.5;
          border: 1px solid ${({ theme }) => theme && theme.color};
          box-sizing: border-box;
          border-radius: 4px;
          transform: rotate(90deg);
        }
        ::-webkit-scrollbar-thumb {
          height: 8px;
          background: ${({ theme }) => theme && theme.background};
          border-radius: 4px;
          transform: rotate(90deg);
        }
      }
    }
  }

  .item {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme && theme.color};
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
