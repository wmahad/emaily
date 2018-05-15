require('babel-core/register');
require('babel-polyfill');
import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

 // create store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// wrap the entire app in a provider with a store.
const Container = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

render(<Container />, document.querySelector('#app-container'));
