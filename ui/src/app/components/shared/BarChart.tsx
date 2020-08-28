import React, { useRef, useEffect } from 'react';
import { select, scaleBand, scaleLinear, max } from 'd3';
import { IBarChartData } from '../../../types/components';
const margin = { top: 50, right: 50, bottom: 50, left: 130 };
const color = ['#fff', '#90caf9', '#2196f3', '#1565c0'];
const width = 600 - margin.left - margin.right;
const height = 250;

const BarChart: React.FC<{ data: Array<IBarChartData> }> = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    let svg = select(svgRef.current as any);

    const yScale = scaleBand()
      .paddingInner(0.1)
      .domain(data.map((_, index) => index) as any)
      .range([0, height]);

    const xScale = scaleLinear()
      .domain([0, max(data, entry => entry.value)] as (
        | number
        | { valueOf(): number }
      )[])
      .range([0, width]);

    // append group translated to chart area
    svg = svg
      .append('g')
      .attr('viewBox', '0 0 200 100')
      .attr('preserveAspectRatio', 'xMinYMin')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // draw the bars
    svg
      .selectAll('.bar')
      .data(data, (entry: any, index: any) => entry.name as any)
      .join((enter: any) =>
        enter.append('rect').attr('y', (entry, index) => yScale(index)),
      )
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('height', yScale.bandwidth())
      .transition()
      .attr('width', entry => xScale(entry.value))
      .attr('y', (entry: any, index: any) => yScale(index) as any)
      .style('fill', (d: IBarChartData): any => {
        if (d.value >= 30) {
          return color[3];
        } else if (d.value < 30 && d.value >= 15) {
          return color[2];
        } else if (d.value < 15 && d.value >= 1) {
          return color[1];
        } else if (d.value < 1) {
          return color[0];
        }
      });
    // draw the labels
    //values in  %
    svg
      .selectAll('.label_value')
      .data(data, (entry: any, index: number) => entry.attribute)
      .join(enter =>
        enter
          .append('text')
          .attr(
            'y',
            (entry, index: number) =>
              (yScale(index as any) as any) + yScale.bandwidth() / 2 + 5,
          ),
      )
      .text(
        entry => `${entry.value < 1 ? 'меньше 1' : Math.trunc(entry.value)}%`,
      )
      .style('fill', (data: IBarChartData): any => {
        if (data.value >= 30) {
          return color[3];
        } else if (data.value < 30 && data.value >= 15) {
          return color[2];
        } else if (data.value < 15) {
          return color[1];
        }
      })
      .attr('class', 'label_value')
      .attr('x', entry => xScale(entry.value + 0.5))
      .transition()
      .attr(
        'y',
        (entry, index: number) =>
          (yScale(index as any) as number) + yScale.bandwidth() / 2 + 5,
      );
    // attribute names
    svg
      .selectAll('.label_attribute')
      .data(data, (entry: any, index: number) => entry.attribute)
      .join(enter =>
        enter
          .append('text')
          .attr(
            'y',
            (entry, index: number) =>
              (yScale(index as any) as number) + yScale.bandwidth() / 2 + 5,
          ),
      )
      .text(entry => `${entry.attribute}`)
      .style('stroke', 'gray')
      .attr('class', 'label_attribute')
      .attr('x', entry => xScale(-10))
      .transition()
      .attr(
        'y',
        (entry, index: number) =>
          (yScale(index as any) as number) + yScale.bandwidth() / 2 + 5,
      );
  }, [data]);

  return (
    <svg
      className="bar-chart-container"
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
      role="img"
      ref={svgRef as any}
    ></svg>
  );
};

export default BarChart;
