import React from 'react';
import PropTypes from 'prop-types';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  HorizontalBarSeries
} from 'react-vis';

const LineChart = props => {
  return (
    <div>
      <XYPlot margin={{ bottom: 70 }} xType="ordinal" width={300} height={300}>
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        {props.type === 'vertical' && <VerticalBarSeries data={props.data} />}
        {props.type === 'horizontal' && (
          <HorizontalBarSeries data={props.data} />
        )}
      </XYPlot>
    </div>
  );
};

LineChart.propTypes = {};

LineChart.defaultProps = {};

export default LineChart;
