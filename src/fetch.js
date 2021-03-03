import { Component } from 'react';

class Api extends Component{

    state={
        bpi:{},
        time:{}
    }

    componentDidMount(){
        const url='https://api.coindesk.com/v1/bpi/currentprice.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const {bpi, time} = data
            this.setState({
                bpi,
                time
            })
        })
    }

    _renderCurrencies(){
        const {bpi} = this.state
        const currencies = Object.keys(bpi)
        return currencies.map(currency => (
            <div key={currency}>
                1 BTS es equivalente {bpi[currency].rate} <span>{currency} ({bpi[currency].description})</span>
            </div>
        )
        )
    }

    _renderDays(){
        const {time} = this.state
        return <p>{time.updated}</p>
    }

    render(){
        return(
            <div>
                <h3>Divisas</h3>
                {this._renderCurrencies()}
                <h3>Ultima actualizacion</h3>
                {this._renderDays()}
            </div>
        )
    }
}

export default Api