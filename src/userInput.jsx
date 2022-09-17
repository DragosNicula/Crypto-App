import React, { Component } from 'react'
import Select from 'react-select'
import { Graph } from './graph.jsx'

const options = [
    { value: "bitcoin", label: "Bitcoin" },
    { value: "ethereum", label: "Ethereum" },
    { value: "solana", label: "Solana" },
    { value: "shiba inu", label: "Shiba Inu" },
    { value: "cardano ada", label: "Cardano Ada" }
];

class UserInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            coinSelected: '',
        };

    }

    updateCoin(e) {
        this.setState({ coinSelected: e.value });
    }

    showPriceEvolution() {
        let coin = this.state.coinSelected;
        localStorage.setItem("coinSelected", coin);
        return <Graph />
    }

    render() {
        return (
            <div>
                <Select options={ options } onChange={(e) => this.updateCoin(e)}/>
                <br></br>
                <br></br>
                { this.showPriceEvolution() }
            </div>
        )
    }
}


export default UserInput;