import styled from 'styled-components';

const bloggerComments = {
  maxWidth: 440,
  comment: 271,
  score: 101,
  button: 105,
};

export const AddComment = styled.div<{ theme }>`
  margin: 0 auto 45px;
  width: ${bloggerComments.maxWidth + 'px'};
  display: flex;
  & > .input-data {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    & > .comment {
      width: ${bloggerComments.comment + 'px'};
      height: 60px;
      margin-bottom: 18px;
    }
    & > .score {
      display: flex;
      align-items: center;
      & > .stars {
        position: relative;
        margin-right: 33px;
        .star {
          width: 13px;
          height: 12px;
          margin-right: 5px;
          &:last-child {
            margin-right: 0;
          }
        }
        .prompt {
          position: absolute;
          bottom: -12px;
          left: 0;
          color: red;
          font-size: 10px;
        }
      }
      & > .input-subs {
        width: ${bloggerComments.score + 'px'};
        height: 32px;
        margin-right: 3px;
      }
      & > .text {
        width: 57px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        line-height: 14px;
        text-align: center;
        & > .first {
          color: ${({ theme }) => theme.color && theme.color};
          font-size: 14px;
        }
        & > .second {
          color: #fff;
          font-size: 15px;
        }
      }
    }
  }
  & > .add-comment {
    width: ${bloggerComments.button + 'px'};
    height: 54px;
    .text {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
`;
