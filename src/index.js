import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducers from './Core/reducers';
import registerServiceWorker from './registerServiceWorker';

//Criação da store do Redux, acoplando o middleware redux-thunk
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

//Wrapping do componente App no componente Provider
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('raiz')
);

registerServiceWorker();


