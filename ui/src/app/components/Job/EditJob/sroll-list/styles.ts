import styled from 'styled-components';
import { IPropsTheme } from './../../../../../types/index';

export const ListContainer = styled.div<IPropsTheme>`
  & > .list {
    height: 50px;
    display: flex;
    overflow-x: auto;
    padding-bottom: 8px;
    ::-webkit-scrollbar {
      width: 200px;
      height: 8px;
      mix-blend-mode: normal;
      opacity: 0.5;
      border: 1px solid ${({ theme }) => theme && theme.color};
      box-sizing: border-box;
      border-radius: 4px;
      transform: rotate(90deg);
    }
    ::-webkit-scrollbar-thumb {
      height: 8px;
      background: ${({ theme }) => theme && theme.background};
      border-radius: 4px;
      transform: rotate(90deg);
    }
  }
  .scroll-item {
    margin-right: 9px;
    &:last-child {
      margin-right: 0px;
    }
    .text {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      white-space: nowrap;
    }
  }
  .error {
    margin: auto;
    color: red;
    font-size: 0.7em;
  }
`;
