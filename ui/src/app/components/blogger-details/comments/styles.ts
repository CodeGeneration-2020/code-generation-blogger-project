import styled from 'styled-components';
import { IPropsTheme } from './../../../../types/index';

export const CommentList = styled.div<IPropsTheme>`
  width: 100%;
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
      background-color: ${({ theme }) => theme && theme.color};
      border-radius: 3px;
    }
  }
`;

export const CommentCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  & > .ava {
    display: flex;
    align-items: center;
    margin-right: 20px;
    & > .img {
      width: 60px;
      height: 60px;
    }
    @media screen and (max-width: 1000px) {
      margin-right: 10px;
    }
    @media screen and (max-width: 900px) {
      margin-right: 5px;
    }
  }
  & > .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    line-height: 20px;
    & > .full_name {
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      margin-bottom: 3px;
      @media screen and (max-width: 1100px) {
        font-size: 14px;
      }
      @media screen and (max-width: 900px) {
        font-size: 12px;
      }
    }
    & > .text {
      font-weight: normal;
      font-size: 14px;
      color: #28b5e1;
      @media screen and (max-width: 1100px) {
        font-size: 13px;
      }
      @media screen and (max-width: 900px) {
        font-size: 11px;
      }
    }
    & > .score {
      & > .star {
        width: 13px;
        height: 12px;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
        @media screen and (max-width: 1100px) {
          width: 11px;
          height: 10px;
          margin-right: 3px;
        }
      }
    }
  }
`;

export const Rating = styled.div<IPropsTheme>`
  margin: 0 5px 0 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  & > .count {
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: ${({ theme }) => theme && theme.color};
    @media screen and (max-width: 1100px) {
      font-size: 32px;
    }
    @media screen and (max-width: 900px) {
      font-size: 26px;
    }
  }
  & > .text {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    display: flex;

    & > .left-part {
      color: ${({ theme }) => theme && theme.color};
      margin-right: 4px;
    }
    & > .right-part {
      color: #fff;
    }
    @media screen and (max-width: 1100px) {
      font-size: 12px;
    }
    @media screen and (max-width: 900px) {
      font-size: 11px;
    }
  }
`;

export const Comment = styled.p<IPropsTheme>`
  width: 220px;
  margin-top: 3px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  font-family: 'Roboto' sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  color: ${({ theme }) => theme && theme.color};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  @media screen and (max-width: 900px) {
    font-size: 9px;
    width: 200px;
  }
`;
