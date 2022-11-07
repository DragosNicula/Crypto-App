import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export function Graph(props) {

    return(
        <div style={{ marginLeft: "23%"}}>
            <LineChart
                width={1000}
                height={600}
                data={props.dataBase}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <XAxis dataKey="time" />
                <YAxis type="number" domain={[props.min, props.max]} allowDataOverflow/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#097969"/>
            </LineChart>
        </div>
    )
}