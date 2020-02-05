import React, { Component } from 'react';
import './Conversor.css';

class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter() {
        
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=890ce89ccd85ad58cbf5`;

        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(json => {
            let cotacao = json[de_para];
            let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
            this.setState({ moedaB_valor });
        })
    }

    render() {
        return(
            <div class="conversor-content">
                <div className="conversor">
                    <h2>{this.props.moedaA}</h2>
                    <input type="number" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                    <button onClick={this.converter}>Converter</button>
                    
                </div>
                <button className="inverte">
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
                    </svg>
                </button>
                <div className="conversor">
                    <h2>{this.props.moedaB}</h2>
                    <p class="valor">R$ {this.state.moedaB_valor}</p>
                </div>
            </div>
        )
    }
}

export default Conversor;