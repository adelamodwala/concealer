import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import * as encodeActions from '../../reducers/encode/encodeActions';
import ConvertForm from './ConvertForm';
import styleVariables from '../../lib/styleVariables.json';

class Home extends Component {

    onEncodeClick(rawText) {
        let {dispatch, actions} = this.props;
        dispatch(actions.encodeInput(rawText));
    }

    onDecodeClick(rawText) {
        let {dispatch, actions} = this.props;
        dispatch(actions.decodeInput(rawText));
    }

    render() {
        let homeClass = classNames({
            'home-container': true,
            'section-container': true
        });

        return (
            <div>
                <div className={homeClass}>
                    <ConvertForm convertType="encode"
                                 convertedValue={this.props.encodedValue}
                                 isFetchingConvertResult={this.props.isFetchingEncodeResult}
                                 onConvertClick={(rawText) => this.onEncodeClick(rawText)}
                                 buttonBackgroundColor={styleVariables.colors.themeBg}
                                 buttonLabelColor={styleVariables.colors.primaryBgText}
                                 textareaStyle={{color: 'black'}}
                                 resultStyle={{color: styleVariables.colors.secondaryBgText}}/>
                </div>
                <div className={homeClass} style={{backgroundColor: styleVariables.colors.themeBg}}>
                    <ConvertForm convertType="decode"
                                 convertedValue={this.props.decodedValue}
                                 isFetchingConvertResult={this.props.isFetchingDecodeResult}
                                 onConvertClick={(rawText) => this.onDecodeClick(rawText)}
                                 buttonBackgroundColor={styleVariables.colors.secondaryBgBtn}
                                 buttonLabelColor={styleVariables.colors.secondaryBgText}
                                 textareaStyle={{color: styleVariables.colors.primaryBgText}}
                                 resultStyle={{color: styleVariables.colors.primaryBgText}}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {isFetchingEncodeResult, encodedValue, isFetchingDecodeResult, decodedValue} = state.encode;
    return {
        isFetchingEncodeResult,
        encodedValue,
        isFetchingDecodeResult,
        decodedValue
    }
}

function mapDispatchToProps(dispatch) {
    const {encodeInput, decodeInput} = encodeActions;
    const dispatchActions = bindActionCreators({
        encodeInput,
        decodeInput
    }, dispatch);
    return {
        dispatch,
        actions: dispatchActions
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);