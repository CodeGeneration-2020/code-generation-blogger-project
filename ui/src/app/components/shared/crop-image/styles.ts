import { IPropsTheme } from './../../../../types/index';
import styled from 'styled-components';

export const CropImgContainer = styled.div<IPropsTheme>`
  margin: 0 auto;
  width: 780px;
  background: #1a1e24;
  box-shadow: 0px 1px 8px rgba(110, 110, 110, 0.1);
  border-radius: 16px;
  padding: 96px 122px 112px;
  & > .preview {
    width: 100%;
    height: 100%;
    margin-bottom: 64px;
  }
  & > .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .save {
      color: #ffffff;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
    }
    .cancel {
      color: ${({ theme }) => theme.color};
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
    }
  }
  //custom-image-crop
  .ReactCrop__crop-selection {
    box-shadow: ${({ theme }) => theme && theme.boxShadow};
    border-radius: 50%;
  }
  .ReactCrop__drag-handle:nth-child(2n) {
    display: none;
  }
`;
