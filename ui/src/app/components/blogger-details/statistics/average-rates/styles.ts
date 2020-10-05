import styled from 'styled-components';

export const AverageRatesContainer = styled.div`
  width: 100%;
  padding: 0 64px;
  @media screen and (max-width: 900px) {
    padding: 0 30px;
  }
  display: flex;
  justify-content: space-between;
  & > .coverage {
    display: flex;
    flex-direction: column;
    & > .story {
      margin-bottom: 47px;
    }
    & > .post {
    }
  }
  & > .showing {
    display: flex;
    flex-direction: column;
    & > .story {
      margin-bottom: 47px;
    }
    & > .post {
    }
  }
  .block {
    background: linear-gradient(360deg, #0496ff 0%, #28b5e0 100%);
    border-radius: 8px;
    width: 189px;
    @media screen and (max-width: 900px) {
      width: 170px;
    }
    height: 95px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;
