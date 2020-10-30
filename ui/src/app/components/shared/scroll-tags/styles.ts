import { ITheme } from './../../../../types/index';
import styled from 'styled-components';

interface IProps {
  scroll?: string;
  theme: ITheme;
}

export const ListTags = styled.div<IProps>`
  display: flex;
  overflow-x: ${({ scroll }) => scroll && scroll};
  padding-bottom: ${({ scroll }) => scroll && '18px'};
  ::-webkit-scrollbar {
    width: 200px;
    height: 8px;
    mix-blend-mode: normal;
    opacity: 0.5;
    border: 1px solid ${({ theme }) => theme.color && theme.color};
    box-sizing: border-box;
    border-radius: 4px;
    transform: rotate(90deg);
  }
  ::-webkit-scrollbar-thumb {
    height: 8px;
    background: ${({ theme }) => theme.background && theme.background};
    border-radius: 4px;
    transform: rotate(90deg);
  }
  .default-tag {
    white-space: nowrap;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.color && theme.color};
    margin-right: 7px;
  }
`;
