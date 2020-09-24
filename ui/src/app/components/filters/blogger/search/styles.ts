import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  & > .input {
    width: 75%;
    padding: 5px;
    background: #212121;
    border-radius: 10px;
    & > #search-input {
      outline: none;
      border: 1px solid #616161;
      padding-left: 15px;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      background: #212121;
      color: #fff;
      font-size: 10px;
    }
    margin-right: 10px;
  }
  & > .button {
    width: 25%;
    height: 52px;
    & .button-text {
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;
