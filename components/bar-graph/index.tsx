'use client';
import { Data } from 'plotly.js';
import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';
interface BarGraphProps {
  data: Data[];
}

const BarGraph: React.FC<BarGraphProps> = ({data}) => {
  const width = useMemo(() => {
    return window.innerWidth - 300;
  }, []);
    console.log(data,'bar');
    return (
      <Plot
        data={data}
        layout={ {width: width, height: 340} }
      />
    );
}
export default BarGraph;