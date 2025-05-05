
// import React from 'react';
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// const data01 = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//     { name: 'Group E', value: 278 },
//     { name: 'Group F', value: 189 },
// ];

// const EarningChart = () => {
//     return (
//         <div>
//             <div className=" rounded-2xl mt-2 p-2 text-gray-300 pr-14">
//                 <div className="flex justify-between items-center">
//                     <h3 className="mb-5 text-[24px] font-roboto font-medium  text-black">
//                         Booking Statistics
//                     </h3>
//                 </div>
//                 <div className="bg-white py-8 px-4">
//                     <ResponsiveContainer width="100%" height={400}>
//                         <PieChart>
//                             <Pie
//                                 dataKey="value"
//                                 isAnimationActive={false}
//                                 data={data01}
//                                 cx="50%"
//                                 cy="50%"
//                                 outerRadius={80}
//                                 fill="#8884d8"
//                                 label
//                             />
//                             <Tooltip />
//                             <Legend />
//                         </PieChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EarningChart;



// EarningChart.jsx
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Sat', value: 1343.3, color: '#8b5cf6' },
    { name: 'Sun', value: 740.1, color: '#f87171' },
    { name: 'Mon', value: 1201.8, color: '#22d3ee' },
    { name: 'Tue', value: 954.6, color: '#fbbf24' },
    { name: 'Wed', value: 1110.7, color: '#3b82f6' },
    { name: 'Thu', value: 1308.7, color: '#4ade80' },
    { name: 'Fri', value: 1264.2, color: '#a78bfa' },
];

const total = data.reduce((sum, item) => sum + item.value, 0).toFixed(1);

const EarningChart = () => {
    return (
        <div className='p-6 rounded-lg shadow-md w-full h-full'>
            <h3 className="mb-5 text-[24px] font-degular font-semibold text-black">
                Earning Statistics
            </h3>
            <div className=" flex flex-col justify-center items-center">
                <ResponsiveContainer width="100%" height={500}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={0}
                            outerRadius={110}
                            paddingAngle={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
             
            </div>
        </div>

    );
}
export default EarningChart;