import styled from 'styled-components';

export const ChooseRoleContainer = styled.div`
  padding: 124px 0 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Logo = styled.span`
  /* margin: 0 auto 120px; */
  margin-bottom: 120px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01px;
  color: #ffffff;
`;

export const Users = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const User = styled.div<{ color; logoWidth; logoHeight }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 22%;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 900px) {
    margin-right: 10%;
  }
  & > .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 78px;
    & > img {
      width: ${({ logoWidth }) => logoWidth && logoWidth};
      height: ${({ logoHeight }) => logoHeight && logoHeight};
    }
  }
  & > .role-description {
    margin: 0 auto 50px;
    width: 277px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-style: normal;
    text-align: center;
    line-height: 30px;
    letter-spacing: 0.01px;
    & > .role {
      font-size: 36px;
      color: #ffffff;
      margin-bottom: 25px;
    }
    & > .description {
      width: 80%;
      font-size: 18px;
      color: ${({ color }) => color && color};
    }
  }
  & > .log-in {
    display: flex;
    flex-direction: column;
    & > .text {
      margin-top: 15px;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.01px;
      color: #ffffff;
    }
    .btn-content {
      display: flex;
      justify-content: center;
      align-items: center;
      & > .text {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.01px;
        color: #ffffff;
        margin-right: 22px;
      }
    }
  }
`;
