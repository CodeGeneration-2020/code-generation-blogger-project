import { IPropsTheme } from './../../../../../types/index';
import styled from 'styled-components';
import { location } from '../../../../../consts/responsive';

export const SelectedContainer = styled.div<IPropsTheme>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .countries {
    width: 100%;
    height: 32px;
    margin-bottom: 7px;
  }
  & > .cities {
    width: ${location.selectedCity + 'px'};
    @media screen and (max-width: 1180px) {
      width: ${location.selectedCity * 0.8 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${location.selectedCity * 0.6 + 'px'};
    }
    display: flex;
    height: 61px;
    padding-bottom: 21px;
    overflow-x: auto;
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
  .item {
    white-space: nowrap;
    margin-right: 6px;
    &:last-child {
      margin-right: none;
    }
  }
`;
