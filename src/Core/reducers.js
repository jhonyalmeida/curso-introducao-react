import { combineReducers } from 'redux';
import { LISTAR_TIPOS, LISTAR_POKEMONS, CRIAR_POKEMON } from './actions';

const pokemonReducer = (state = [], action) => {
    switch(action.type) {
        case LISTAR_POKEMONS:
            return action.payload;
        case CRIAR_POKEMON:
            return [...state, action.payload];
        default:
            return state;
    }
}

const tipoReducer = (state = [], action) => {
    switch(action.type) {
        case LISTAR_TIPOS:
            return action.payload;
        default:
            return state;
    }
}

//Composição de um reducer único a partir de vários
const rootReducer = combineReducers({
    pokemons: pokemonReducer,
    tipos: tipoReducer
});

export default rootReducer;