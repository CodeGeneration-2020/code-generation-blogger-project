import styled from 'styled-components';

export const Button = styled('button')`
  background: #97c3f9;
  border-radius: 2em;
  padding: 0.7em 2em;
  outline: none;
  border: 0;
  color: white;
  min-width: 200px;
  &:hover {
    background: #0c1033;
    opacity: 0.4;
  }
  &:active {
    background: #0c1033;
    opacity: 0.7;
  }
`;
