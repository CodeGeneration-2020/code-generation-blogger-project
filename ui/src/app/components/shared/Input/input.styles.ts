import styled from 'styled-components';

interface IStyle {
  fontSize: string;
  lineHeight: string;
  padding: string;
  width: string;
}

interface IHeight {
  height: string;
}

export const InputWrapper = styled('div')<IHeight>`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    width: 100%;
  }
  height: ${({ height }) => height && height};
`;

export const Input = styled('input')<IStyle>`
  width: ${({ width }) => width && width};
  height: 90%;
  outline: none;
  background: #1a1e24;
  padding: ${({ padding }) => (padding ? padding : '5px 11px')};
  border: 1px solid #414d55;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '20px')};
  color: #90a1ac;
`;

export const Error = styled('div')`
  height: 10%;
  color: red;
  font-size: 0.7em;
  margin-left: 7px;
`;
