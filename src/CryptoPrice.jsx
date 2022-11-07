import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Graph } from './Graph';

export function CryptoPrice(props) {
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
                    setDataBase(currentDataBase => [...currentDataBase, { price: response.data.price, time: new Date().toLocaleTimeString() }])
                    setPrice(Number(response.data.price))
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
        <div>
            <Graph dataBase={dataBase} min={min} max={max} coinName={props.coinName}/>
        </div>
    );
}


