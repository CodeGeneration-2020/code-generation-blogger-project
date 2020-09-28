import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  & > .input {
    width: 74.5%;
    margin-right: 23px;
    padding: 10px;
    background: #1a1e24;
    border-radius: 16px;
    box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
    & > #search-input {
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
    }
  }
  & > .button {
    width: 23.5%;
    height: 90px;
    & .button-text {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      line-height: 20px;
      text-transform: uppercase;
      letter-spacing: 0.01px;
      font-weight: bold;
    }
  }
`;
