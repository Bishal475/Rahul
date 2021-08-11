import React  from "react";
import Chart  from 'react-apexcharts';
import Data from "./Data.js";

class Graph1 extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  
		series: [{
		  data: Data.getFrequency()
		}, {
		  data: Data.getPerUse()
		}],
		options: {
		  chart: {
			type: 'bar',
			height: 430
		  },
		  plotOptions: {
			bar: {
			  horizontal: true,
			  dataLabels: {
				position: 'top',
			  },
			}
		  },
		  dataLabels: {
			enabled: true,
			offsetX: -6,
			style: {
			  fontSize: '12px',
			  colors: ['#fff']
			}
		  },
		  stroke: {
			show: true,
			width: 1,
			colors: ['#fff']
		  },
		  tooltip: {
			shared: true,
			intersect: false
		  },
		  xaxis: {
			categories: Data.getCores()
		  },
		},
	  
	  
	  };
	}

	componentDidMount(){
		console.log(Data.getFrequency())
	}

  

	render() {
	  return (
		

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="bar" height={430} />
</div>
		);
	}
}
export default Graph1;