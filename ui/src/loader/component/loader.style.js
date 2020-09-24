import styled from 'styled-components';

export const LoaderContainer = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 999;
`;

export const Loader = styled('svg')`
  width: 200px;
  height: 200px;
  margin: auto;
  background: rgba(255, 255, 255, 0);
  display: block;
  shape-rendering: auto;
`;
