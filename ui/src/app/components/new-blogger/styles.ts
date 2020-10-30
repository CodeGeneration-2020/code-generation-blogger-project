import styled from 'styled-components';

export const NewBloggerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #001642 -0.4%,
    #090f25 15.96%,
    #0b0d1f 32.32%,
    #0d0b18 49.71%,
    #0b0d1f 66.58%,
    #081029 82.43%,
    #001642 97.77%
  );
  padding: 195px 0;
`;

export const Title = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.01px;
  color: #ffffff;
  margin-bottom: 59px;
`;

export const PriceList = styled.div`
  margin: 0 auto;
  width: 780px;
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  & > .prompt {
    margin: 55px 0 59px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
  }
  & > .list {
    display: flex;
    flex-direction: column;
    & > .item {
      display: flex;
      justify-content: center;
      margin-bottom: 42px;
      &:last-child {
        margin-bottom: 60px;
      }
      & > .input-price {
        display: flex;
        flex-direction: column;
        margin-right: 63px;
        & > .title {
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 900;
          font-size: 18px;
          line-height: 21px;
          text-align: center;
          color: #ffffff;
          margin-bottom: 17px;
        }
        & > .input {
          display: flex;
          align-items: center;
          & > .icon {
            margin-left: 5px;
          }
        }
      }
      & > .price-icon {
        width: 115px;
        display: flex;
        justify-content: center;
      }
    }
  }

  & > .btn-next {
    margin: 0 auto 59px;
    .btn-text {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.01px;
      color: #b240e4;
    }
  }
`;
