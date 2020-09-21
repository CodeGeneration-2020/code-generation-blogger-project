import styled from 'styled-components';

export const TextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    width: 100%;
  }
`;
export const Text = styled('textarea')`
  padding: 10px 12px;
  border: 1px solid #0c1033;
  border-radius: 4px;
  min-height: 50px;
`;

export const Error = styled('div')`
  margin-top: 0.5em;
  color: red;
  font-size: 0.7em;
`;
