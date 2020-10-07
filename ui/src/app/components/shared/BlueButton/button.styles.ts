import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  boxShadow: string;
  borderRadius: string;
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
  background: linear-gradient(360deg, #0496ff 0%, #28b5e0 100%);
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  border: 1px solid #0091ea;
  color: #fff;
  &:hover {
    cursor: pointer;
    background: #fff;
    color: black;
  }
`;
