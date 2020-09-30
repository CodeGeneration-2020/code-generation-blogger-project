import styled from 'styled-components';

export const Gender = styled.div`
  width: 100%;
  padding: 0 30%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  & > .item {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: none;
    }
    & > .checkbox {
      margin-top: 8px;
      position: relative;
      display: flex;
      & > .checkbox-input {
        -webkit-appearance: none;
        appearance: none;
        position: absolute;
      }
      & > .checkbox-input:checked + .label:after {
        opacity: 1;
      }
      & > .label {
        padding-left: 25px;
      }
      & > .label::before {
        cursor: pointer;
        content: '';
        display: block;
        box-sizing: border-box;
        width: 20px;
        height: 20px;
        opacity: 0.5;
        border: 1px solid #28b5e1;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      & > .label::after {
        cursor: pointer;
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background: linear-gradient(360deg, #0496ff 0%, #28b5e0 100%);
        border-radius: 2px;
        position: absolute;
        left: 0;
        top: 0;
        margin-top: 4px;
        margin-left: 4px;
        z-index: 2;
        opacity: 0;
        transition: opacity 0.1s linear;
      }
    }

    & > .icon-male {
      & > img {
        width: 21px;
        height: 21px;
      }
      padding-left: 12%;
      margin-top: 3px;
    }

    & > .icon-female {
      margin-top: 10px;
      margin-right: 5px;
      padding-left: 12%;
      & > img {
        width: 16.5px;
        height: 29px;
      }
    }
  }
`;
