import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import styleVariables from '../../lib/styleVariables.json';

export default class SnailLoader extends Component {
    render() {
        return (
            <div>
                {this.props.isLoading ? <CircularProgress size={0.5} color={styleVariables.colors.floater} /> : null}
            </div>
        );
    }
}