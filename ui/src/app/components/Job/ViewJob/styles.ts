import styled from 'styled-components';

export const JobContainer = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding-top: 83px;
  padding-bottom: 80px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* header-info */
  & > .header-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 58px;
    margin-left: 204px;
    margin-right: 195px;
    @media screen and (max-width: 1050px) {
      margin-left: 180px;
      margin-right: 170px;
    }
    @media screen and (max-width: 900px) {
      margin-left: 140px;
      margin-right: 130px;
    }
    & > .short-title {
      width: 164px;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.01px;
      color: #ffffff;
    }
    & > .budget {
      display: flex;
      flex-direction: column;
      & > .sum {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 40px;
        text-align: center;
        color: #d022ed;
      }
      & > .text {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
      }
    }
  }
  /*END header-info */

  /* tags */
  & > .tags {
    margin-bottom: 42px;
    display: flex;
    justify-content: center;
  }
  /* END tags */

  /* location */
  & > .location {
    margin-bottom: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .countries {
      margin-bottom: 7px;
    }
    & > .cities {
    }
  }
  /* END location */

  .item {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #d022ed;
    margin-right: 7px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const Description = styled.div`
  margin: 0 185px 30px;
  @media screen and (max-width: 1050px) {
    margin: 0 170px 30px;
  }
  @media screen and (max-width: 900px) {
    margin: 0 140px 30px;
  }
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  & > .title {
    margin-top: 15px;
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
  }
  & > .text {
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    color: #d022ed;
  }
`;

export const Connection = styled.div`
  margin: 0 195px 34px;
  @media screen and (max-width: 1100px) {
    margin: 0 120px 34px;
  }
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  & > .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 20px;
  }
  & > .contacts {
    display: flex;
    justify-content: space-between;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #d022ed;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      margin: 0 auto;
    }
    & > .item {
      display: flex;
      @media screen and (max-width: 900px) {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      & > .icon {
        margin-right: 14px;
      }
      & > .content {
      }
    }
  }
`;

export const Attachments = styled.div`
  width: 100%;
  margin-bottom: 57px;
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
    margin-bottom: 14px;
  }
  & > .list {
    margin: 0 auto;
    display: flex;
    & > .item {
      margin-right: 14px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;

export const Rating = styled.div`
  width: 570px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 33px;
  border: 1px solid #414d55;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  @media screen and (max-width: 850px) {
    width: 500px;
  }
  & > .user-info {
    margin-left: 38px;
    display: flex;
    margin-right: 21px;
    width: 155px;
    & > .ava {
      margin-right: 15px;
      & > img {
        width: 59px;
        height: 59px;
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
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.00364821px;
        color: #ffffff;
        margin-bottom: 6px;
      }
      & > .location {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 7px;
        color: #d022ed;
      }
    }
  }
  & > .insta-icon {
    display: flex;
    align-items: center;
    margin-right: 35px;
  }
  & > .score {
    display: flex;
    align-items: center;
    & > .star {
      margin-right: 14px;
      width: 37px;
      height: 35px;
      & :last-child {
        margin-right: 0px;
      }
    }
  }
`;

export const Comments = styled.div`
  margin: 50px 170px 0;
  @media screen and (max-width: 1050px) {
    margin: 50px 140px 0;
  }
  @media screen and (max-width: 900px) {
    margin: 50px 120px 0;
  }
  @media screen and (max-width: 780px) {
    margin: 50px 100px 0;
  }
`;
