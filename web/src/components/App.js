import React, {Component} from 'react';
import {Link} from 'react-router';

export class App extends Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
            </div>
        );
    }
}
