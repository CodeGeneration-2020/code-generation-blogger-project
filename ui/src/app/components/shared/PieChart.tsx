import * as React from 'react';
import * as d3 from 'd3';

const PieChart: React.FC<{ data: number[] }> = ({ data }) => {
  const height: number = 300;
  const width: number = 300;

  let pie: any = d3.pie()(data);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
};

const Slice = props => {
  let { pie }: any = props;
  let arc: any = d3.arc().innerRadius(0).outerRadius(70);

  let interpolate = d3.interpolateRgb('#bbdefb', '#1e88e5');

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path key={index} d={arc(slice) as string} fill={sliceColor} />;
  });
};

export default PieChart;
