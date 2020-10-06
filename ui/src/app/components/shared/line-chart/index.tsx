import React from 'react';
import * as Styled from './styles';
import { customerTheme } from '../../../../consts/theme';
import PropTypes from 'prop-types';

const LineChart = ({ er, theme }) => {
  return (
    <Styled.LineChartContainer er={er} theme={theme}>
      <span className="left-part" />
      <span className="right-part" />
    </Styled.LineChartContainer>
  );
};

LineChart.propTypes = {
  er: PropTypes.number,
  theme: PropTypes.object,
};

LineChart.defaultProps = {
  er: 0,
  theme: customerTheme,
};

export default LineChart;
