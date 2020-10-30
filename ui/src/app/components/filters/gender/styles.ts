import styled from 'styled-components';
import { hexToRGBA } from '../../../helpers/hexToRgba';

export const Gender = styled.div<{ theme }>`
  padding: 18px 35px 0 34px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1180px) {
    padding: 18px 24px 0 23px;
  }
  @media screen and (max-width: 980px) {
    padding: 18px 14px 0 13px;
  }

  & > .male {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  & > .female {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .icon-male {
    transform: translateY(-5px);
  }

  .icon-female {
    width: 21px;
    transform: translateY(2px);
    & > svg {
      display: flex;
      justify-content: flex-start;
    }
  }

  .ckeckbox {
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    mix-blend-mode: normal;
    border: 1px solid
      ${({ theme }) => theme.color && hexToRGBA(theme.color, 0.5)};
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .checked {
      z-index: 100;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      background: ${({ theme }) => theme && theme.background};
    }
  }
`;
