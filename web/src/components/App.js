import React, {Component} from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import styleVariables from '../lib/styleVariables.json';

export class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Concealer ;)" iconClassNameRight="muidocs-icon-navigation-expand-more"
                                style={{backgroundColor: styleVariables.colors.themeBg, color: styleVariables.colors.primaryBgText}}/>
                        <div className="app-components">
                            {this.props.children}
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
