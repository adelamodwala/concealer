import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import {App} from './components/App';
import {About} from './components/About';
import {Repos} from './components/Repos';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
