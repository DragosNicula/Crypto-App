import React, { useState } from 'react';
import { CryptoPrice } from './CryptoPrice.jsx';

function RenderDetails(props) {
    return (<CryptoPrice coinName={props.coinName}/>);
}

export function ShowDetailsButton(props) {
    const [showDetails, setShowDetails] = useState([]);

    function addDetailsOnBtnClick() {
        setShowDetails(showDetails.concat(<RenderDetails key={showDetails.length} coinName={props.coinName}/>));
        console.log(props.coinName);
    }

    return(
        <div>
            <button type="button" className="btn btn-outline-success" onClick={() => addDetailsOnBtnClick()}>Show Coin Details</button>
            <br></br>
            <br></br>
            { showDetails }
        </div>
    )
}