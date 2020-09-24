import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
}

export const Button = styled.button<Props>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  outline: none;
  font-size: 10px;
  padding: 5px 7px;
  background-color: #40c4ff;
  border: 1px solid #0091ea;
  border-radius: 7px;
  color: #fff;
  &:hover {
    background: #29b6f6;
    opacity: 0.8;
  }
  &:active {
    background: #00e5ff;
    opacity: 0.7;
  }
`;
