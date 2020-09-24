import styled from 'styled-components';

export const CardContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7em 5px;
  background: #212121;
  border-radius: 15px;
  & > .title {
    color: #40c4ff;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const HorizantalSep = styled('div')`
  width: 56px !important;
  height: 1px !important;
  background: #616161;
  opacity: 0.5;
  border-radius: 5px;
  margin: 0.7em 0 1.5em !important;
`;
