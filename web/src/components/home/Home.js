import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import * as conversionActions from '../../reducers/conversion/conversionActions';
import ConvertForm from './ConvertForm';
import styleVariables from '../../lib/styleVariables.json';
import {CONCEAL_METHODS, REVEAL_METHODS} from '../../lib/constants';

class Home extends Component {

    onConcealClick(rawText, secretKey) {
        let {dispatch, actions} = this.props;
        dispatch(actions.concealInput(rawText, secretKey));
    }

    onRevealClick(rawText) {
        let {dispatch, actions} = this.props;
        dispatch(actions.revealInput(rawText));
    }

    onChangeConcealingMethod(concealingMethod) {
        let {actions} = this.props;
        actions.setConcealingMethod(concealingMethod);
    }

    onChangeRevealingMethod(revealingMethod) {
        let {actions} = this.props;
        actions.setRevealingMethod(revealingMethod);
    }

    render() {
        let homeClass = classNames({
            'home-container': true,
            'section-container': true
        });

        return (
            <div>
                <div className={homeClass}>
                    <ConvertForm convertType="conceal"
                                 conversionMethod={this.props.concealingMethod}
                                 convertedValue={this.props.concealedValue}
                                 availableConversionMethods={CONCEAL_METHODS}
                                 isFetchingConvertResult={this.props.isFetchingConcealResult}
                                 showSecretKeyInput={this.props.concealingMethod == CONCEAL_METHODS.AES}
                                 onConvertClick={(rawText, secretKey) => this.onConcealClick(rawText, secretKey)}
                                 onChangeConversionMethod={(concealingMethod) => this.onChangeConcealingMethod(concealingMethod)}
                                 buttonBackgroundColor={styleVariables.colors.themeBg}
                                 buttonLabelColor={styleVariables.colors.primaryBgText}
                                 textareaStyle={{color: 'black'}}
                                 resultStyle={{color: styleVariables.colors.secondaryBgText}}/>
                </div>
                <div className={homeClass} style={{backgroundColor: styleVariables.colors.themeBg}}>
                    <ConvertForm convertType="reveal"
                                 conversionMethod={this.props.revealingMethod}
                                 convertedValue={this.props.revealedValue}
                                 availableConversionMethods={REVEAL_METHODS}
                                 isFetchingConvertResult={this.props.isFetchingRevealResult}
                                 onConvertClick={(rawText) => this.onRevealClick(rawText)}
                                 onChangeConversionMethod={(revealingMethod) => this.onChangeRevealingMethod(revealingMethod)}
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
    const {concealingMethod, isFetchingConcealResult, concealedValue, revealingMethod, isFetchingRevealResult, revealedValue} = state.conversion;
    return {
        concealingMethod,
        isFetchingConcealResult,
        concealedValue,
        revealingMethod,
        isFetchingRevealResult,
        revealedValue
    }
}

function mapDispatchToProps(dispatch) {
    const {concealInput, revealInput, setConcealingMethod, setRevealingMethod} = conversionActions;
    const dispatchActions = bindActionCreators({
        concealInput,
        revealInput,
        setConcealingMethod,
        setRevealingMethod
    }, dispatch);
    return {
        dispatch,
        actions: dispatchActions
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);