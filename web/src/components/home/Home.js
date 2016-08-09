import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import * as conversionActions from '../../reducers/conversion/conversionActions';
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

    onChangeEncodingMethod(encodingMethod) {
        let {actions} = this.props;
        actions.setEncodingMethod(encodingMethod);
    }

    onChangeDecodingMethod(decodingMethod) {
        let {actions} = this.props;
        actions.setDecodingMethod(decodingMethod);
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
                                 conversionMethod={this.props.encodingMethod}
                                 convertedValue={this.props.encodedValue}
                                 isFetchingConvertResult={this.props.isFetchingEncodeResult}
                                 onConvertClick={(rawText) => this.onEncodeClick(rawText)}
                                 onChangeConversionMethod={(encodingMethod) => this.onChangeEncodingMethod(encodingMethod)}
                                 buttonBackgroundColor={styleVariables.colors.themeBg}
                                 buttonLabelColor={styleVariables.colors.primaryBgText}
                                 textareaStyle={{color: 'black'}}
                                 resultStyle={{color: styleVariables.colors.secondaryBgText}}/>
                </div>
                <div className={homeClass} style={{backgroundColor: styleVariables.colors.themeBg}}>
                    <ConvertForm convertType="decode"
                                 conversionMethod={this.props.decodingMethod}
                                 convertedValue={this.props.decodedValue}
                                 isFetchingConvertResult={this.props.isFetchingDecodeResult}
                                 onConvertClick={(rawText) => this.onDecodeClick(rawText)}
                                 onChangeConversionMethod={(decodingMethod) => this.onChangeDecodingMethod(decodingMethod)}
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
    const {encodingMethod, isFetchingEncodeResult, encodedValue, decodingMethod, isFetchingDecodeResult, decodedValue} = state.conversion;
    return {
        encodingMethod,
        isFetchingEncodeResult,
        encodedValue,
        decodingMethod,
        isFetchingDecodeResult,
        decodedValue
    }
}

function mapDispatchToProps(dispatch) {
    const {encodeInput, decodeInput, setEncodingMethod, setDecodingMethod} = conversionActions;
    const dispatchActions = bindActionCreators({
        encodeInput,
        decodeInput,
        setEncodingMethod,
        setDecodingMethod
    }, dispatch);
    return {
        dispatch,
        actions: dispatchActions
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);