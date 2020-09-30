import styled from 'styled-components';

export const SelectContainer = styled.div`
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
      background: #1dabea;
    }
  }
`;
