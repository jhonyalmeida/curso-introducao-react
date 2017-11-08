import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ViewListaPokemon from './Pokemon/ViewListaPokemon';
import ViewCadastroPokemon from './Pokemon/ViewCadastroPokemon';

export default () => {
  return (
      <BrowserRouter >
          <Switch>
              <Route exact path="/" component={ViewListaPokemon} />
              <Route path="/cadastro" component={ViewCadastroPokemon} />
          </Switch>
      </BrowserRouter>
  );
}
