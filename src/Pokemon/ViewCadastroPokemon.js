import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import FormPokemon from './FormPokemon';
import { listarTipos, criarPokemon } from './../Core/actions';

class ViewCadastroPokemon extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.listarTipos();
    }

    submit(formData) {
        this.props.criarPokemon(formData, p => {
            alert(`${p.nome} inserido na agenda!`);
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Cadastro de Pokémon</h3>
                <FormPokemon tipos={this.props.tipos} submit={this.submit} linkCancelar="/" />
            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        tipos: state.tipos
    }
}

export default withRouter(
    connect(mapStateToProps, { listarTipos, criarPokemon })(ViewCadastroPokemon)
);