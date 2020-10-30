import styled from 'styled-components';

interface IStyleProps {
  fontSize?: string;
  lineHeight?: string;
  borderRadius?: string;
  theme?: string;
}

export const TextWrapper = styled('div')`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    width: 100%;
  }
`;

export const Text = styled('textarea')<IStyleProps>`
  width: 100%;
  height: 90%;
  background: #1a1e24;
  outline: none;
  resize: none;
  padding: 10px 12px;
  border: 1px solid #414d55;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '12px'};
  min-height: 50px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '10px')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '15px')};
  color: #90a1ac;
  ::-webkit-input-placeholder {
    color: #90a1ac;
    opacity: 1;
  }
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: #414d55;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color && theme.color};
    border-radius: 3px;
  }
`;

export const Error = styled('div')`
  padding-top: 3px;
  height: 10%;
  margin-left: 10px;
  color: red;
  font-size: 0.7em;
`;
