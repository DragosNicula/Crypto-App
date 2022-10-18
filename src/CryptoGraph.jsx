import React, { useState } from 'react';
import { CryptoPrice } from './CryptoPrice.jsx';

export function CryptoGraph() {
    return(
        <div>
            <CryptoPrice />
        </div>
    )
}

setInterval(CryptoGraph, 1500);