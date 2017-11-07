import React, { Component } from 'react';
import FormPokemon from './FormPokemon';
import servidor from './../servidor';

class ViewCadastroPokemon extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = { tipos: [] };
    }

    componentDidMount() {
        servidor.getTipos().then(tipos => this.setState({ tipos }));
    }

    submit(formData) {
        servidor.createPokemon(formData)
            .then(p => alert(`${p.nome} inserido na agenda!`));
    }

    render() {
        return (
            <div className="container">
                <h3>Cadastro de Pokémon</h3>
                <FormPokemon tipos={this.state.tipos} submit={this.submit} linkCancelar="/" />
            </div>
        );
    }

}

export default ViewCadastroPokemon;