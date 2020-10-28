import styled from 'styled-components';

export const Footer = styled.div`
  position: relative;
  height: 190px;
  width: 100%;
  & > .background-img {
    position: absolute;
    height: 190px;
    width: 100%;
    overflow: hidden;
    & > svg {
      width: 100%;
      height: 100%;
    }
  }
`;
