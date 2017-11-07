import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ViewListaPokemon.css'
import servidor from './../servidor';

class ViewListaPokemon extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            pokemons: [] 
        };
    }

    componentDidMount() {
        servidor.getPokemons().then(pokemons => {
            this.setState({ pokemons, loading: false });
        }).catch(error => {
            this.setState({ loading: false, error: error.message });
        });
    }

    renderTable(pokemons) {
        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nº</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemons.map(p => (
                            <tr key={p.id}>
                                <td>{p.numero}</td>
                                <td>{p.nome}</td>
                                <td>{p.descricao}</td>
                                <td>
                                    <img height="64" width="64" 
                                        src={p.linkImagem} alt={p.nome} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link className="btn btn-default" to="/cadastro">Novo</Link>
            </div>
        );
    }

    render() {
        const pokemons = this.state.pokemons;
        if (this.state.loading) {
            return <p>Carregando...</p>;
        }
        if (this.state.error) {
            return <p>Erro ao obter os dados: {this.state.error}</p>;
        }
        return pokemons.length > 0 
            ? this.renderTable(pokemons) 
            : <p>Nenhum pokémon encontrado.</p>;
    }

}

export default ViewListaPokemon;