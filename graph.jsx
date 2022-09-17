import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Axios from 'axios';

let graphData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export function Graph() {
    const [cryptoCoin, setCryptoCoin] = useState([]);
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const coin = Number(cryptoCoin);
    const data = { "time": time, "cryptoCoin": coin }; 
    let coinSelected = localStorage.getItem("coinSelected");
    let min = cryptoCoin + 10;
    let max = cryptoCoin;

    graphData.push(data);
    if (min > cryptoCoin) {
        min = cryptoCoin;
    } else if (max < cryptoCoin) {
        max = cryptoCoin;
    }
    if (graphData.length > 25) {
        graphData.shift();
    }

    useEffect(() => {
        if (coinSelected === 'bitcoin') {
            setInterval(() => { 
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT").then(
                (response) => { 
                    console.log(response)
                    setCryptoCoin(response.data.price)
                });
            }, 1000);
        } else if (coinSelected === 'ethereum') {
            setInterval(() => { 
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT").then(
                (response) => { 
                    
                    setCryptoCoin(response.data.price) 
                });
            }, 1000);
        } else if (coinSelected === 'solana') {
            setInterval(() => { 
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT").then(
                (response) => { 
                    setCryptoCoin(response.data.price) 
                });
            }, 1);
        } else if (coinSelected === 'shiba inu') {
            setInterval(() => { 
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=SHIBUSDT").then(
                (response) => { 
                    setCryptoCoin(response.data.price) 
                });
            }, 1000);
        } else if (coinSelected === 'cardano ada') {
            setInterval(() => { 
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT").then(
                (response) => { 
                    setCryptoCoin(response.data.price) 
                });
            }, 1000);
        }
    });

    return(
        <div>
            <div>
                <LineChart width={1000} height={730} data={graphData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="time" />
                    <YAxis datakey="y" domain={[min, max]}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="cryptoCoin" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};
