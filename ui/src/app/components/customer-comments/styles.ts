import { IPropsTheme } from '../../../types/index';
import styled from 'styled-components';

export const AddComment = styled.div`
  width: 100%;
  margin: 0 auto 56px;
  display: flex;
  & > .input-comment {
    resize: none;
    outline: none;
    padding-left: 10px;
    width: 218px;
    height: 54px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #90a1ac;
    background: #1a1e24;
    border: 1px solid #414d55;
    border-radius: 8px;
    ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: #414d55;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #414d55;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d022ed;
      border-radius: 3px;
    }
  }
  & > .score {
    display: flex;
    align-items: center;
    margin: 0 15px;
    position: relative;
    .star {
      margin-right: 5px;
      width: 13px;
      height: 12px;
      &:last-child {
        margin-right: 0px;
      }
    }
    .prompt {
      position: absolute;
      top: 5px;
      left: 7px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 8px;
      line-height: 15px;
      color: #90a1ac;
    }
  }
  & > .add-comment {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;

export const CommentsCustomerContainer = styled.div<IPropsTheme>`
  width: 100%;
  height: 100%;
  .infinite-scroll {
    overflow: scroll;
    ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-track {
      background-color: #414d55;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #414d55;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d022ed;
      border-radius: 3px;
    }
  }

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
