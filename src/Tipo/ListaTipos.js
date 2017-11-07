import React, { Component } from 'react';
import servidor from './../servidor';

class ListaTipos extends Component {

    constructor(props) {
        super(props);
        this.state = { tipos: [] };
    }

    componentDidMount() {
        servidor.getTipos().then(tipos => this.setState({tipos}));
    }

    render() {
        const tipos = this.state.tipos;
        return (
            <ul>
                {tipos.map(tipo => (
                    <li key={tipo.id}>{tipo.nome}</li>
                ))}
            </ul>
        );
    }

}

export default ListaTipos;