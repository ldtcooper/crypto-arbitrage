import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const colors = ["#950952", "#020202", "#023618", "#005c69", "#5e0035"];

const LineGraph = ({ data }) => {
    const legendMap = Object.keys((data[0] || {})).filter((el) => el !== 'date');
    
    return (
            <ResponsiveContainer width='100%' height={500}>
                    <LineChart
                            data={data}
              margin={{
                      top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Legend />
                {
                    legendMap.map((name, i) => (<Line type="monotone" dataKey={name} key={name} stroke={colors[i]} />))
                }
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineGraph;
