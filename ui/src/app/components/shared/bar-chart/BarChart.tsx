import React, { useRef, useEffect } from 'react';
import { select, scaleBand, scaleLinear, max } from 'd3';
import { IBarChartData } from '../../../../types/components';
import useResizeObserver from './useResizeObserver';
import { like } from '../../../../consts/colors';

const BarChart: React.FC<{ data: Array<IBarChartData> }> = ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions: any = useResizeObserver(wrapperRef);
  // will be called initially and on every data change
  useEffect(() => {
    let svg = select(svgRef.current as any);
    if (!dimensions) return;
    // sorting the data
    data.sort((a, b) => b.value - a.value);
    const maxLengthLebel = max(data, entry => entry.attribute.length as any);

    const yScale = scaleBand()
      .paddingInner(0.1)
      .domain(data.map((value, index) => index) as any) // [0,1,2,3,4,5]
      .range([0, dimensions.height]); // [0, 200]

    const xScale = scaleLinear()
      .domain([0, max(data, entry => entry.value)] as any) // [0, 65 (example)]
      .range([
        0,
        dimensions.width - (dimensions.width / 100) * 27 - maxLengthLebel,
      ]); // [0, 400 (example)]

    svg = svg.attr('transform', `translate(${maxLengthLebel})`);
    // draw the bars
    svg
      .selectAll('.bar')
      .data(data, (entry: any, index) => entry.attribute)
      .join((enter: any) =>
        enter.append('rect').attr('y', (entry, index) => yScale(index)),
      )
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('height', yScale.bandwidth())
      .transition()
      .attr('width', entry => xScale(entry.value))
      .attr('y', (entry, index: any) => yScale(index) as any)
      .style('fill', (d: any): any => {
        return like[Object.keys(like).filter(l => d.attribute === l)[0]];
      });
    // draw the labels
    // svg
    //   .selectAll('.label')
    //   .data(data, (entry: any, index) => entry.attribute)
    //   .join(enter =>
    //     enter
    //       .append('text')
    //       .attr(
    //         'y',
    //         (entry, index: any) =>
    //           (yScale(index) as any) + yScale.bandwidth() / 2 + 5,
    //       ),
    //   )
    //   .text((entry: any) => `${entry.attribute}`)
    //   .attr('class', 'label')
    //   .attr('x', (entry: any) => {
    //     return -maxLengthLebel;
    //   })
    //   .transition()
    //   .attr(
    //     'y',
    //     (entry, index: any) =>
    //       (yScale(index) as any) + yScale.bandwidth() / 2 + 5,
    //   );
    //draw value
    svg
      .selectAll('.label_value')
      .data(data, (entry: any, index) => entry.attribute)
      .join(enter =>
        enter
          .append('text')
          .attr(
            'y',
            (entry, index: any) =>
              (yScale(index) as any) + yScale.bandwidth() / 2 + 5,
          ),
      )
      .text(
        (entry: any) =>
          `${entry.value < 1 ? 'меньше 1' : Math.trunc(entry.value)}%`,
      )
      .style('fill', (d: any): any => {
        let color = '';
        Object.keys(like).forEach(l => {
          if (d.attribute === l && d.value < 1) color = like[l];
        });
        return color;
      })
      .attr('class', 'label_value')
      .attr('x', (entry: any) => xScale(entry.value + 0.2))
      .transition()
      .attr(
        'y',
        (entry, index) =>
          (yScale(index as any) as any) + yScale.bandwidth() / 2 + 5,
      );
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef as any} className="chart">
      <svg ref={svgRef as any}></svg>
    </div>
  );
};

export default BarChart;
