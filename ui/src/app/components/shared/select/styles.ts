import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  & > select {
    width: 100%;
    border-radius: 8px;
    outline: none;
    background: none;
    border: 1px solid #616161;
    -webkit-appearance: none;
    appearance: none;
    font-size: 10px;
    padding: 5px 20px 5px 10px;
    font-family: inherit;
    color: #bdbdbd;
  }
`;
