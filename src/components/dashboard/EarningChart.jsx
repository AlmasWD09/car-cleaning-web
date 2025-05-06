import React from 'react';
import { Pie } from '@ant-design/charts';

const EarningChart = () => {
    const data = [
        { type: 'Category 1', value: 27 },
        { type: 'Category 2', value: 25 },
        { type: 'Category 3', value: 18 },
        { type: 'Category 4', value: 15 },
        { type: 'Category 5', value: 10 },
        { type: 'Others', value: 5 },
        { type: 'Others', value: 5 },
    ];

    const total = data.reduce((sum, d) => sum + d.value, 0);


    const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6, // Donut shape
        label: {
            type: 'inner',
            offset: '-50%',
            content: { total },
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: {
                visible: true,
                content: 'Total',
                style: {
                    fontSize: '20px',
                    color: 'gray', 
                },
            },
            content: {
                visible: true,
                content: `${total}`, 
                style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'red', // Custom color for the total value
                },
            },
        },
    };

    return (
        <div>
            
            <Pie {...config} />
        </div>
    );
};

export default EarningChart;
