import { IPropsTheme } from '../../../../types';
import styled from 'styled-components';

export const CardContainer = styled('div')<IPropsTheme>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  & > .title {
    color: ${({ theme }) => theme && theme.color};
    font-size: 16px;
    line-height: 20px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    letter-spacing: 0.01px;
    font-weight: bold;
    @media screen and (max-width: 980px) {
      font-size: 14px;
    }
  }
`;

export const HorizantalSep = styled('div')`
  width: 66px !important;
  height: 1px !important;
  background: #414d55;
  margin: 22px 0 20px !important;
  @media screen and (max-width: 980px) {
    width: 56px !important;
  }
`;
