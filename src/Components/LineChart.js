import React from "react";
import { Line } from 'react-chartjs-2';

function LineChart() {
  return<Line height={200} width={100} 
  data={{
      labels:['April', 'Sep', 'Oct' , 'Nov', 'Dec']
  }}/>;
  
}

export default LineChart;