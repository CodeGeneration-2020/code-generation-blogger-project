import { ITheme } from './../../../../types/index';
import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  boxShadow: string;
  borderRadius: string;
  hover?: boolean;
  background?: string;
  border?: string;
  filter?: string;
  theme: ITheme;
}

export const Button = styled.button<Props>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  outline: none;
  border: none;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  line-height: 20px;
  padding: 6px 12px;
  background: ${({ theme, background }) =>
    background ? background : theme && theme.background};
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
  border: ${({ border }) => border && border};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  filter: ${({ filter }) => filter && filter};
  color: ${({ color }) => (color ? color : '#fff')};
  &:hover {
    cursor: pointer;
    background: ${({ hover = true }) => hover && '#fff'};
    color: ${({ hover = true }) => hover && 'black'};
  }
`;
