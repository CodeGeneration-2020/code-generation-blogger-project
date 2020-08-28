import React, { useRef, useEffect } from 'react';
import { select, scaleBand, scaleLinear, max } from 'd3';
import useResizeObserver from './useResizeObserver';
const color = ['#fff', '#90caf9', '#2196f3', '#1565c0'];

function RacingBarChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    // sorting the data
    data.sort((a, b) => b.value - a.value);

    const yScale = scaleBand()
      .paddingInner(0.1)
      .domain(data.map((value, index) => index)) // [0,1,2,3,4,5]
      .range([0, dimensions.height * 1.5]); // [0, 200]

    const xScale = scaleLinear()
      .domain([0, max(data, entry => entry.value)]) // [0, 65 (example)]
      .range([0, dimensions.width]); // [0, 400 (example)]

    // draw the bars
    svg
      .selectAll('.bar')
      .data(data, (entry, index) => entry.attribute)
      .join(enter =>
        enter.append('rect').attr('y', (entry, index) => yScale(index)),
      )
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('height', yScale.bandwidth())
      .transition()
      .attr('width', entry => xScale(entry.value))
      .attr('y', (entry, index) => yScale(index))
      .style('fill', d => {
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
    svg
      .selectAll('.label')
      .data(data, (entry, index) => entry.attribute)
      .join(enter =>
        enter
          .append('text')
          .attr(
            'y',
            (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5,
          ),
      )
      .text(entry => `${entry.attribute}`)
      .attr('class', 'label')
      .attr('x', -70)
      .transition()
      .attr('y', (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5);
    //draw value
    svg
      .selectAll('.label_value')
      .data(data, (entry, index) => entry.attribute)
      .join(enter =>
        enter
          .append('text')
          .attr(
            'y',
            (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5,
          ),
      )
      .text(
        entry => `${entry.value < 1 ? 'меньше 1' : Math.trunc(entry.value)}%`,
      )
      .style('fill', data => {
        if (data.value >= 30) {
          return color[3];
        } else if (data.value < 30 && data.value >= 15) {
          return color[2];
        } else if (data.value < 15) {
          return color[1];
        }
      })
      .attr('class', 'label_value')
      .attr('x', entry => xScale(entry.value + 0.2))
      .transition()
      .attr('y', (entry, index) => yScale(index) + yScale.bandwidth() / 2 + 5);
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} style={{ marginLeft: '2rem' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default RacingBarChart;
