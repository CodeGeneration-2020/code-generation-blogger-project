import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  height: 190px;
  width: 100%;
  & > .background-img {
    position: absolute;
    height: 190px;
    width: 100%;
    overflow: hidden;
    & > svg {
      width: 100%;
      height: 100%;
    }
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > .logo {
    z-index: 999;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 20px;
    letter-spacing: 0.01px;
    color: #ffffff;
  }
  & > .user-info {
    z-index: 999;
    display: flex;
    align-items: center;
    .ava {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      margin-right: 18px;
    }
    .user-name {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      color: #ffffff;
    }
  }
  margin-bottom: 185px;
`;
