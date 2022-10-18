import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Graph } from './Graph';

export function CryptoPrice() {
    let [dataBase, setDataBase] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);
    let [price, setPrice] = useState([]);
    let [time, setTime] = useState();
    let [min, setMin] = useState(price);
    let [max, setMax] = useState(price);
    let data = { "price": price, "time": time };
    dataBase.push(data);

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
        Axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT").then(response => {
            setPrice(Number(response.data.price));
        }).catch(error => console.log(error));
        setTime(new Date().toLocaleTimeString());
        return() => {}
    });

    return(
        <div>
        <Graph dataBase={dataBase} min={min} max={max} />
        </div>
    );
}


