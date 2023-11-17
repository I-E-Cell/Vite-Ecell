import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);
const Graph = () => {
	const data = {
		// labels: ["April", "August", "September", "No"],
		labels: ["", "", "", ""],

		datasets: [
			{
				label: "No of Participants",
				data: [300, 700, 350,2400],
				backgroundColor: "#B0D4DA",
				borderColor: "#86C8D3",
				pointBorderColor: "#11BCD9",
				pointBorderWidth: 4,
				tension: 0.2,
			},
			// {
			// 	label: "3G Users",
			// 	data: [15, 13, 12, 11, 9, 6, 3],
			// 	backgroundColor: "transparent",
			// 	borderColor: "grey",
			// 	pointBorderColor: "#ee538b",
			// 	pointBorderWidth: 4,
			// 	tension: 0.2,
			// },
		],
	};

	const options = {
        
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				min: 0,
				max: 2500,
				ticks: {
					stepSize: 200,
					callback: (value) => value ,
				},
			},
		},
	};

	return (
		<>
			<div className="z-10 relative flex justify-center -top-[5em] sm:-top-[8.2em] md:-top-[6em] lg:-top-[7.5em] w-[95%] sm:w-[75%] md:w-[78%] h-[95%] mx-auto plot">
				
				<Line data={data} options={options}></Line>
			</div>
		</>
	);
};

export default Graph;