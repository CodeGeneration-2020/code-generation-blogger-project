import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  & > select {
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    outline: none;
    background: none;
    border: 1px solid #414d55;
    -webkit-appearance: none;
    appearance: none;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 12px 6px 12px;
    font-family: inherit;
    color: #90a1ac;
    @media screen and (max-width: 1000px) {
      font-size: 12px;
    }
  }
`;
