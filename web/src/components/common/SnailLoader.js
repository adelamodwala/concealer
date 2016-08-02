import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class SnailLoader extends Component {
    render() {
        return (
            <div>
                {this.props.isLoading ? <CircularProgress /> : null}
            </div>
        );
    }
}