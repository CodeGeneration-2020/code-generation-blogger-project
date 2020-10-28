import { IPropsTheme } from './../../../../types/index';
import styled from 'styled-components';
import { search } from '../../../../consts/responsive';

export const SearchContainer = styled.div<IPropsTheme>`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  & > .input {
    width: ${search.input + 'px'};
    @media screen and (max-width: 1180px) {
      width: ${(search.input - 24) * 0.8 + 24 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${(search.input - 24) * 0.6 + 24 + 'px'};
    }
    margin-right: 23px;
    padding: 10px;
    background: #1a1e24;
    border-radius: 16px;
    box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
    & > #search-input {
      ::-webkit-input-placeholder {
        color: #90a1ac;
        opacity: 1;
      }
      font-family: 'Poppins', sans-serif;
      outline: none;
      border: 1px solid #414d55;
      padding-left: 23px;
      padding-top: 5px;
      width: 100%;
      height: 70px;
      border-radius: 8px;
      color: ${({ theme }) => theme && theme.color};
      background: #1a1e24;
      font-size: 16px;
      line-height: 20px;
    }
  }
  & > .button {
    width: ${search.button + 'px'};
    @media screen and (max-width: 1180px) {
      width: ${search.button * 0.8 + 'px'};
    }
    @media screen and (max-width: 980px) {
      width: ${search.button * 0.6 + 'px'};
    }
    height: 90px;
    & .button-text {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      line-height: 20px;
      text-transform: uppercase;
      letter-spacing: 0.01px;
      font-weight: bold;
      @media screen and (max-width: 980px) {
        font-size: 22px;
      }
    }
  }
`;
