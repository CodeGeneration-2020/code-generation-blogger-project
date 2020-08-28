import styled from 'styled-components';

export const BloggerDetailsContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  & .toggle-charts {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    & > button {
      width: 170px;
      height: 50px;
      background: red;
      color: white;
      border-radius: 30px;
      border: none;
      font-size: 16px;
    }
  }
`;

export const HeaderProfile = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  & .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid gray;
    & > span {
      margin-left: 20px;
    }
  }

  & .blogger-info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    & .fs-name {
      & .first-name {
      }
      & .surname {
        margin-left: 5px;
      }
    }
    & .location {
      & .country {
      }
      & .city {
        margin-left: 5px;
      }
    }
  }

  & .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    & > span {
      width: 150px;
      height: 45px;
      border: 3px solid lightblue;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: lightblue;
    }
  }
`;
export const Characteristics = styled.div`
  display: flex;
  padding: 10px;
  & .price {
    width: 50%;
    & .single-price {
      margin-left: 10%;
    }
    & .total-price {
      margin-left: 10%;
      margin-top: 10px;
    }
  }
  & .analytics {
    display: flex;
    flex-direction: column;
    width: 50%;
    & .followers {
      margin-left: auto;
    }
    & .engagement-rate {
      margin-left: auto;
      margin-top: 10px;
    }
  }
`;

export const Charts = styled.div`
  width: 100%;
  height: 100%;
  & .header {
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    & > span {
      font-size: 16px;
    }
  }

  & .charts {
    display: flex;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
    & .sex {
      width: 50%;
      @media screen and (max-width: 900px) {
        margin: auto;
        width: 100%;
      }
    }
    & .city {
      width: 50%;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }
  & .age {
    width: 50%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
`;

export const Statistic = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 40px 20px;
  @media screen and (max-width: 475px) {
    flex-direction: column;
    align-items: center;
  }
  & .avg-impression {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 475px) {
      align-items: center;
    }
    & .post {
      border: 1px solid gray;
      width: 200px;
      height: 200px;
    }
    & .story {
      margin-top: 15px;
      border: 1px solid gray;
      width: 200px;
      height: 200px;
    }
  }
  & .avg-coverage {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 475px) {
      margin-top: 15px;
      align-items: center;
    }
    & .post {
      border: 1px solid gray;
      width: 200px;
      height: 200px;
    }
    & .story {
      margin-top: 15px;
      border: 1px solid gray;
      width: 200px;
      height: 200px;
    }
  }
`;
