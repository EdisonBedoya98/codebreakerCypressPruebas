import React, { Component } from 'react'

export default class Vista extends Component {
    state = {
        urlApiSecret: 'http://localhost:3000/setsecret/',
        urlApiGuess: 'http://localhost:3000/guess/',
        numero: '',
        mensaje:''
    }

    setSecret = async () => {
        const resp = await fetch(this.state.urlApiSecret + this.state.numero);
        const data = await resp.json();
        this.setState({ mensaje: data.message})
        console.log(data.message);
    }

    setGuess = async () => {
        const resp = await fetch(this.state.urlApiGuess + this.state.numero);
        const data = await resp.json();
        this.setState({ mensaje: data.result})
        console.log(data);
    }

    handleEdit = (event) => {
        this.setState({ numero: event.target.value })
        console.log(this.state.numero)
    }

    render() {
        return (
            <div>
                <input id="numero" type="text" placeholder="number" onChange={this.handleEdit} />
                <button id="button1" onClick={this.setSecret}>Set secret</button>
                <button id="button2" onClick={this.setGuess}>Set Guess</button>
                <div id="salida">{this.state.mensaje}</div>
                
            </div>
        )
    }
}