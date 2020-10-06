import { ITheme } from './../../../../types/index';
import styled from 'styled-components';

interface IProps {
  er: string;
  theme: ITheme;
}

export const LineChartContainer = styled.div<IProps>`
  width: 100%;
  height: 100%;
  background: #30393e;
  border-radius: 2.5px;
  display: flex;
  & > .left-part {
    width: ${({ er }) => er && er}%;
    background: ${({ theme }) => theme && theme.background};
    border-radius: 2px;
  }
  & > .right-part {
  }
`;
