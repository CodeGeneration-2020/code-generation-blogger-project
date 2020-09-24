import styled from 'styled-components';

export const Gender = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .item {
    display: flex;
    align-items: center;
    & > .checkbox {
      margin-top: 8px;
      position: relative;
      & > .checkbox-input {
        -webkit-appearance: none;
        appearance: none;
        position: absolute;
      }
      & > .checkbox-input:checked + .label:after {
        opacity: 1;
      }
      & > .label {
        font-size: 1rem;
        color: #444;
        padding-left: 15px;
      }
      & > .label::before {
        cursor: pointer;
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        border: 1px solid #64b5f6;
        border-radius: 3px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      & > .label::after {
        cursor: pointer;
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background: #00b0ff;
        position: absolute;
        left: 0;
        top: 0;
        margin-top: 2px;
        margin-left: 2px;
        border-radius: 1px;
        z-index: 2;
        opacity: 0;
        transition: opacity 0.1s linear;
      }
    }
  }
`;
