import styled from 'styled-components';

export const Location = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > .item {
    padding: 5px 0;
    display: flex;
    width: 100%;
    height: 100%;
    & > .select-box {
      display: flex;
      align-items: center;
      width: 30%;
      & > .select {
        width: 80%;
      }
      & > .button-plus {
        width: 20%;
        display: flex;
        justify-content: center;
        margin: 0 10px;
      }
    }
    & > .options-list {
      width: 70%;
      & .location-tag {
        margin: 2px;
      }
    }
  }
`;

export const ButtonPlus = styled.div`
  /* width: 20px; */
  height: 23px;
  border-radius: 5px;
  border: 1px solid #616161;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > span {
    color: #00b0ff;
    font-size: 35px;
  }
  &:hover {
    color: #29b6f6;
    opacity: 0.8;
  }
  &:active {
    color: #00e5ff;
    opacity: 0.8;
    border-color: white;
  }
`;
