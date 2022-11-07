import React, { useState } from 'react';
import { InputBox } from './components/InputBox.jsx';
import { ShowGraph } from './components/ShowGraph.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


export function CryptoGraph() {
    const [coinName, setCoinName] = useState('');

    return(
        <div>
            <h1>Crypto App</h1>
            <h6>Works for Bitcoin, Ethereum and XRP.</h6>
            <InputBox setCoinName={setCoinName}/>          
            <ShowGraph coinName={coinName} />
        </div>
    );
}
