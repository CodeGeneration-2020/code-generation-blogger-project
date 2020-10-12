import styled from 'styled-components';

export const CommentsContainer = styled.div`
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
      background-color: #d022ed;
      border-radius: 3px;
    }
  }
`;

export const List = styled.div`
  min-height: 300px;
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  width: 175px;
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

export const Comment = styled.p`
  width: 222px;
  margin-top: 3px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  font-family: 'Roboto' sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  color: #d022ed;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  @media screen and (max-width: 900px) {
    font-size: 9px;
    width: 200px;
  }
`;

export const AddComment = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  background: #1a1e24;
  border-radius: 16px;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  & > #comment-input {
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: 1px solid #414d55;
    padding-left: 23px;
    padding-top: 5px;
    width: 100%;
    height: 70px;
    border-radius: 8px;
    color: #a4a9ab;
    background: #1a1e24;
    font-size: 16px;
    line-height: 20px;
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
`;
