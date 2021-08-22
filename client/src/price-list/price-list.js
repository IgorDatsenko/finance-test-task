import React from 'react'
import {io} from "socket.io-client";
import {PriceItem} from "./price-item/price-item";

export class PriceList extends React.Component {
    socket
    state = {
        prises: []
    }

    componentDidMount() {
        this.socket = io.connect('http://localhost:4000');
        this.socket.emit('start');
        this.socket.on('ticker', (response) => {
            console.log(response);
            this.setState({prises: response});
        })

        setTimeout(() => {
            this.socket.emit('disconnect');
        }, 20000)
    }

    componentWillUnmount() {
        this.socket.emit('disconnect');
    }

    render() {
        return (
            <ul>
                {this.state.prises.map((price) =>
                    <PriceItem price={price} key={price.ticker}/>)}
            </ul>
        )
    }
}
