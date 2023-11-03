import React from 'react'
import {Bar} from 'react-chartjs-2'


const LineChart = () => {
    return (
        <div className='relative '>
            <Bar
                data={{
                    labels: ['March', 'April', 'Aug', 'Sep', 'Nov'],
                    datasets: [{
                        label: 'No of Participants',
                        data: [800, 1500, 300,800,400],
                    },
                    ],
                }}
                height={100}
                width={200}
                options={{
                    maintainAspectRatio: false,
                }}

            />

        </div>
    );
}

export default LineChart