import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {App} from './components/App';
import Home from './components/Home';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
injectTapEventPlugin();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
