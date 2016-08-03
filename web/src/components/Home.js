import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
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
                            rows={2}
                            rowsMax={5}/>


                    </div>
                    <RaisedButton label="Encode" onClick={() => this.onEncodeClick()}/>
                    <div style={{wordBreak: 'break-all', width: 300}}>
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