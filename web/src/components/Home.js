import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as encodeActions from '../reducers/encode/encodeActions';
import SnailLoader from './common/SnailLoader';

class Home extends Component {

    onEncodeClick() {
        let rawText = this.refs.encodeText.getValue();
        console.log(rawText);
        let {dispatch, actions} = this.props;
        dispatch(actions.encodeInput(rawText));

    }

    render() {
        let encodedValue = this.props.encodedValue ? this.props.encodedValue : '';
        return (
            <div>
                <h1>Concealer - For Your Strings</h1>

                <div>
                    <TextField
                        ref="encodeText"
                        floatingLabelText="Enter text to encode..."
                        multiLine={true}
                        rows={2}
                        rowsMax={5}/>
                    <RaisedButton label="Encode" onClick={() => this.onEncodeClick()}/>
                    <SnailLoader isLoading={this.props.isFetchingEncodeResult}/>
                </div>
                <div style={{wordBreak: 'break-all', width: 300}}>
                    {encodedValue}
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