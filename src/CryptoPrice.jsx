import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Graph } from './Graph';

export function CryptoPrice(props) {
    const [dataBase, setDataBase] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    const [price, setPrice] = useState([]);
    const [time, setTime] = useState();
    const [min, setMin] = useState(price);
    const [max, setMax] = useState(price);
    const data = { price: price, "time": time };
    dataBase.push(data);
    console.log();

    if (min > price) {
        setMin(price);
    }
    if (max < price) {
        setMax(price);
    }
    if (dataBase.length >= 40) {
        dataBase.shift();
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (props.coinName.toLowerCase() === 'bitcoin') {
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT").then(response => {
                    setPrice(response.data.price)
                }).catch(error => console.log(error));
            } else if (props.coinName.toLowerCase() === 'ethereum') {
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT").then(response => {
                    setPrice(response.data.price)
                }).catch(error => console.log(error));
            } else if (props.coinName.toLowerCase() === 'xrp') {
                Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT").then(response => {
                    setPrice(response.data.price)
                }).catch(error => console.log(error));
            }
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return() => clearInterval(interval);
    }, []);

    return(
        <div>
            <Graph dataBase={dataBase} min={min} max={max} coinName={props.coinName}/>
        </div>
    );
}


