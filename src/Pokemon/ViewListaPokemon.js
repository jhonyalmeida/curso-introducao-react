import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ViewListaPokemon.css'
import Pokemon from './Pokemon'
import servidor from './../servidor';

class ViewListaPokemon extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = { 
            loading: true,
            search: '',
            pokemons: [] 
        };
    }

    componentDidMount() {
        this.buscar();
    }

    buscar(nome = '') {
        servidor.getPokemons(nome).then(pokemons => {
            this.setState({ pokemons, loading: false });
        }).catch(error => {
            this.setState({ loading: false, error: error.message });
        });
    }

    onChange(event) {
        this.buscar(event.target.value);
    }

    render() {
        const pokemons = this.state.pokemons;
        return (
            <div className="container">
                <div className="row">
                    <input type="text" className="form-control" onChange={this.onChange} />
                </div>
                <div>
                    {this.state.loading && <p>Carregando...</p>}
                    {this.state.error && <p>Erro ao obter os dados: {this.state.error}</p>}
                    {pokemons.map(p => (
                        <Pokemon pokemon={p} key={p.id} />
                    ))}
                </div>
                <div className="btn-add">
                    <Link className="btn btn-default" to="/cadastro">
                        <span className="glyphicon glyphicon-plus"></span>
                    </Link>
                </div>
            </div>
        );
    }

}

export default ViewListaPokemon;