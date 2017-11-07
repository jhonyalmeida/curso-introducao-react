import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ViewListaPokemon from './Pokemon/ViewListaPokemon';
import ViewCadastroPokemon from './Pokemon/ViewCadastroPokemon';
import ListaTipos from './Tipo/ListaTipos';

class PokemonApp extends React.Component {

    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={ViewListaPokemon} />
                    <Route path="/cadastro" component={ViewCadastroPokemon} />
                </Switch>
            </BrowserRouter>
        );
    }

}

ReactDOM.render(<PokemonApp />, 
    document.getElementById('raiz'));
registerServiceWorker();


