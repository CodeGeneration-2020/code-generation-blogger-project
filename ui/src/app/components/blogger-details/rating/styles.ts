import { IPropsTheme } from './../../../../types/index';
import styled from 'styled-components';

export const Rating = styled.div<IPropsTheme>`
  width: 100%;
  border: 1px solid #414d55;
  border-radius: 8px;
  margin-top: 61px;
  margin-bottom: 53px;
  padding: 19px 91px 24px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    padding: 19px 60px 24px;
  }
  & > .rating-info {
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    & > .title {
      font-size: 11px;
      line-height: 20px;
      color: #ffffff;
    }
    & > .count {
      font-size: 40px;
      line-height: 40px;
      color: ${({ theme }) => theme && theme.color};
    }
    & > .text {
      font-size: 15px;
      line-height: 20px;
      color: ${({ theme }) => theme && theme.color};
    }
  }

  & > .stars {
    display: flex;
    align-items: center;
    & > .star {
      width: 37px;
      height: 35px;
      margin-right: 14px;
      @media screen and (max-width: 1100px) {
        width: 27px;
        height: 25px;
        margin-right: 12px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
