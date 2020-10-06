import styled from 'styled-components';
import { IPropsTheme } from '../../../../types';

export const SelectContainer = styled.div<IPropsTheme>`
  & .react-select {
    & ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    & ::-webkit-scrollbar-track {
      background: #30393e;
    }

    /* Handle */
    & ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme && theme.background};
    }
  }
`;
