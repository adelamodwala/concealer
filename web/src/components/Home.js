import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import * as encodeActions from '../reducers/encode/encodeActions';
import SnailLoader from './common/SnailLoader';
import styleVariables from '../lib/styleVariables.json';

class Home extends Component {

    onEncodeClick() {
        let rawText = this.refs.encodeText.getValue();
        let {dispatch, actions} = this.props;
        dispatch(actions.encodeInput(rawText));

    }

    render() {
        let homeClass = classNames({
            'home-container': true,
            'section-container': true
        });

        let encodedValue = this.props.encodedValue ? this.props.encodedValue : '';
        return (
            <div className={homeClass}>
                <div className='content-box'>
                    <div>
                        <TextField
                            ref="encodeText"
                            floatingLabelText="Enter text to encode..."
                            multiLine={true}
                            fullWidth={true}/>
                    </div>
                    <RaisedButton label="Encode" onClick={() => this.onEncodeClick()}
                                  className="primary"/>
                    <div style={{wordBreak: 'break-all', marginTop: 10}}>
                        {encodedValue}
                    </div>
                    <SnailLoader isLoading={this.props.isFetchingEncodeResult}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {isFetchingEncodeResult, encodedValue} = state.encode;
    return {
        isFetchingEncodeResult,
        encodedValue
    }
}

function mapDispatchToProps(dispatch) {
    const {encodeInput} = encodeActions;
    const dispatchActions = bindActionCreators({
        encodeInput
    }, dispatch);
    return {
        dispatch,
        actions: dispatchActions
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);