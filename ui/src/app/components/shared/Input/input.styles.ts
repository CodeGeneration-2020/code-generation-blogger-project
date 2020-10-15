import styled from 'styled-components';

interface IStyle {
  fontSize: string;
  lineHeight: string;
  padding: string;
}

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    width: 100%;
  }
`;

export const Input = styled('input')<IStyle>`
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
  color: red;
  font-size: 0.7em;
  margin-left: 7px;
`;
