import { IPropsTheme } from './../../../../../types/index';
import styled from 'styled-components';

export const AttachmentsContainer = styled.div<IPropsTheme>`
  width: 320px;
  margin: 32px auto 15px;
  display: flex;
  flex-direction: column;
  & > .title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 25px;
  }
  & > .attached {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 55px;
    & > .list {
      width: 263px;
      overflow-x: auto;
      display: flex;
      padding-bottom: 10px;
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
      .item {
        cursor: pointer;
        margin-right: 15px;
        width: 40px;
        height: 45px;
        &:last-child {
          margin-right: 18px;
        }
      }
    }
    & > .add-file {
      margin-left: auto;
      margin-top: 6px;
      display: flex;
      label {
        width: 34px;
        height: 34px;
        cursor: pointer;
        & > .img {
          width: 34px;
          height: 34px;
        }
      }
    }
  }
`;
