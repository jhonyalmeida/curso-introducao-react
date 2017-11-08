import servidor from './servidor';

export const LISTAR_POKEMONS = 'LISTAR_POKEMONS';
export const LISTAR_TIPOS = 'LISTAR_TIPOS';
export const CRIAR_POKEMON = 'CRIAR_POKEMON';

export function listarPokemons(nome = '') {
    return (dispatch) => {
        servidor.getPokemons().then(pokemons => dispatch({
            type: LISTAR_POKEMONS,
            payload: pokemons
        }));
    };
}

export function listarTipos() {
    return (dispatch) => {
        servidor.getTipos().then(tipos => dispatch({
            type: LISTAR_TIPOS,
            payload: tipos
        }));
    };
}

export function criarPokemon(formData, callback = () => {}) {
    return (dispatch) => {
        servidor.createPokemon(formData).then(pokemon => {
            dispatch({
                type: CRIAR_POKEMON,
                payload: pokemon
            });
            callback(pokemon);
        });
    }
}