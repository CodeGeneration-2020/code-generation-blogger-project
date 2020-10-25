import styled from 'styled-components';

export const SelectedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .countries {
    width: 100%;
    height: 32px;
    margin-bottom: 10px;
  }
  & > .cities {
    display: flex;
    width: 100%;
    height: 60px;
    padding-bottom: 20px;
    overflow-x: auto;
    ::-webkit-scrollbar {
      width: 200px;
      height: 8px;
      mix-blend-mode: normal;
      opacity: 0.5;
      border: 1px solid #d022ed;
      box-sizing: border-box;
      border-radius: 4px;
      transform: rotate(90deg);
    }
    ::-webkit-scrollbar-thumb {
      height: 8px;
      background: linear-gradient(270deg, #9c1abc 0%, #d022ed 100%);
      border-radius: 4px;
      transform: rotate(90deg);
    }
  }
  .item {
    white-space: nowrap;
    margin-right: 6px;
    &:last-child {
      margin-right: none;
    }
  }
`;
