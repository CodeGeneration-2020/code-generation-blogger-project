import React from 'react';
import * as Styled from './styles';
import PropTypes from 'prop-types';
import withTheme from '../../../../HOC/withTheme';

const LineChart: React.FC<{ er; theme? }> = ({ er, theme }) => {
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
  theme: {},
};

export default withTheme(LineChart);
