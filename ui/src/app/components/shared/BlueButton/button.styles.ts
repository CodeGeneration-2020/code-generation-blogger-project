import { ITheme } from './../../../../types/index';
import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  boxShadow: string;
  borderRadius: string;
  theme: ITheme;
}

export const Button = styled.button<Props>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  outline: none;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  line-height: 20px;
  padding: 6px 12px;
  background: ${({ theme }) => theme && theme.background};
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  color: #fff;
  &:hover {
    cursor: pointer;
    background: #fff;
    color: black;
  }
`;
