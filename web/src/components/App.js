import React, {Component} from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="app-components">
                        {this.props.children}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
