import styled from 'styled-components';

interface Props {
  er: string;
}

export const LineChartContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: #30393e;
  border-radius: 2.5px;
  display: flex;
  & > .left-part {
    width: ${({ er }) => er && er}%;
    background: linear-gradient(360deg, #0496ff 0%, #28b5e0 100%);
    border-radius: 2px;
  }
  & > .right-part {
  }
`;
