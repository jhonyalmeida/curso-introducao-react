import React from 'react';
import './Pokemon.css'

export default (props) => {
    const pokemon = props.pokemon;
    return (
        <div className="pokemon-card col-lg-3">
            <h4>{`#${pokemon.numero} ${pokemon.nome}`}</h4>
            <img width="128px" height="128px" src={pokemon.linkImagem} alt={pokemon.nome} />
            <p>
                <strong>Tipo: </strong>{pokemon.tipo.nome}
            </p>
            <textarea className="form-control" value={pokemon.descricao} readOnly />
        </div>
    );
}