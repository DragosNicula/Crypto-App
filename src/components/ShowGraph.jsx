import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export function ShowGraph(props) {
    const [showDetails, setShowDetails] = useState([]);

    function showGraphOnButtonClick() {
        setShowDetails(showDetails.concat(<PriceUpdate key={showDetails.length} coinName={props.coinName}/>));
    }

    return(
        <div>
            <button type="button" className="btn btn-outline-success" onClick={() => showGraphOnButtonClick()}>Show Coin Details</button>
            <br></br>
            <br></br>
            { showDetails }
        </div>
    )
}

function PriceUpdate(props) {
    const [price, setPrice] = useState();
    const [min, setMin] = useState(Infinity);
    const [max, setMax] = useState(0);
    const [dataBase, setDataBase] = useState([{price: price, time: new Date().toLocaleTimeString()}]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (props.coinName.toLowerCase() === 'bitcoin') {
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT").then(response => {
                    setPrice(Number(response.data.price))
                    setDataBase(currentDataBase => [...currentDataBase, { price: response.data.price, time: new Date().toLocaleTimeString() }])
                }).catch(error => console.log(error));
            } else if (props.coinName.toLowerCase() === 'ethereum') {
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT").then(response => {
                    setPrice(Number(response.data.price))
                    setDataBase(currentDataBase => [...currentDataBase, { price: response.data.price, time: new Date().toLocaleTimeString() }])
                }).catch(error => console.log(error));
            } else if (props.coinName.toLowerCase() === 'xrp') {
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT").then(response => {
                    setPrice(Number(response.data.price))
                    setDataBase(currentDataBase => [...currentDataBase, { price: response.data.price, time: new Date().toLocaleTimeString() }])
                }).catch(error => console.log(error));
            }
        }, 1000);
        return() => clearInterval(interval);
    }, []);

    if (min > price) {
        setMin(price);
    }

    if (max < price) {
        setMax(price);
    }

    if (dataBase.length >= 40) {
        dataBase.shift();
    }

    return(
        <div style={{ marginLeft: "23%"}}>
            <LineChart
                width={1000}
                height={600}
                data={dataBase}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <XAxis dataKey="time" />
                <YAxis type="number" domain={[min, max]} allowDataOverflow/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#097969"/>
            </LineChart>
        </div>
    );
}

