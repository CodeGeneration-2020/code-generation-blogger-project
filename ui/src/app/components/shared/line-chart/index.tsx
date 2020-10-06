import React from 'react';
import * as Styled from './styles';
import PropTypes from 'prop-types';

const LineChart = ({ er }) => {
  return (
    <Styled.LineChartContainer er={er}>
      <span className="left-part" />
      <span className="right-part" />
    </Styled.LineChartContainer>
  );
};

LineChart.propTypes = {
  er: PropTypes.number || PropTypes.string,
};

LineChart.defaultProps = {
  er: 0,
};

export default LineChart;
