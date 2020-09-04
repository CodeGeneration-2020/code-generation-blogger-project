import * as React from 'react';
import * as d3 from 'd3';

const PieChart: React.FC<{ data: number[] }> = ({ data }) => {
  const height: number = 250;
  const width: number = 250;

  let pie: any = d3.pie()(data);

  return (
    <div className="chart">
      <svg viewBox="25 0 200 200">
        <g transform={`translate(${width / 2},${height / 2.5})`}>
          <Slice pie={pie} />
        </g>
      </svg>
    </div>
  );
};

const Slice = props => {
  let { pie }: any = props;
  let arc: any = d3.arc().innerRadius(0).outerRadius(90);

  let interpolate = d3.interpolateRgb('#bbdefb', '#1e88e5');

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path key={index} d={arc(slice) as string} fill={sliceColor} />;
  });
};

export default PieChart;
