import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line } from 'recharts';

interface DataPoint {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    adjusted_close: number;
    volume: number;
}

interface Props {
    data: DataPoint[];
}

const StockChart: React.FC<Props> = ({ data }) => {
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
        </LineChart>
    );
}

export default StockChart;
