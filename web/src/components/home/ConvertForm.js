import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SnailLoader from '../common/SnailLoader';
import styleVariables from '../../lib/styleVariables.json';
import {capitalizeFirstLetter} from '../../lib/convert';

export default class ConvertForm extends Component {

    onConvertClick() {
        let rawText = this.refs[this.props.convertType + "Text"].getValue();
        let secretKey = this.refs[this.props.convertType + "SecretKey"] ? this.refs[this.props.convertType + "SecretKey"].getValue() : "";
        this.props.onConvertClick(rawText, secretKey);
    }

    onChangeConversionMethod(value) {
        console.log(value);
        this.props.onChangeConversionMethod(value);
    }

    getConversionMethods() {
        let conversionMethods = this.props.availableConversionMethods;
        let renderOptions = [];
        Object.keys(conversionMethods).map((method, idx) => {
            renderOptions.push(
                <MenuItem key={idx} value={conversionMethods[method]} primaryText={conversionMethods[method]}/>
            );
        });
        return renderOptions;
    }

    render() {
        let convertedValue = this.props.convertedValue ? this.props.convertedValue : '';

        return (
            <div className='content-box'>
                <div>
                    <TextField
                        ref={this.props.convertType + "Text"}
                        floatingLabelText={"Enter text to " + this.props.convertType + "..."}
                        floatingLabelFocusStyle={{color: styleVariables.colors.floater}}
                        underlineFocusStyle={{borderColor: styleVariables.colors.floater}}
                        textareaStyle={this.props.textareaStyle}
                        multiLine={true}
                        fullWidth={true}/>
                    {this.props.showSecretKeyInput ?
                        <TextField
                            ref={this.props.convertType + "SecretKey"}
                            floatingLabelText={"Secret key..."}
                            floatingLabelFocusStyle={{color: styleVariables.colors.floater}}
                            underlineFocusStyle={{borderColor: styleVariables.colors.floater}}
                            textareaStyle={this.props.textareaStyle}
                            fullWidth={true}/> : null
                    }
                </div>

                <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <div style={{flex: 3, position: 'relative'}}>
                        <RaisedButton fullWidth={true} label={capitalizeFirstLetter(this.props.convertType)}
                                      onClick={() => this.onConvertClick()}
                                      backgroundColor={this.props.buttonBackgroundColor}
                                      labelColor={this.props.buttonLabelColor}
                                      style={{marginTop: 12}}
                        />
                        <div style={{position: 'absolute', top: 4, right: 0}}>
                            <SnailLoader isLoading={this.props.isFetchingConvertResult}/>
                        </div>
                    </div>
                    <div style={{flex: 1}}>
                        <DropDownMenu value={this.props.conversionMethod}
                                      onChange={(event, index, value) => this.onChangeConversionMethod(value)}
                                      labelStyle={{color: styleVariables.colors.floater}}
                                      underlineStyle={{borderColor: styleVariables.colors.floater}}>
                            {this.getConversionMethods()}
                        </DropDownMenu>
                    </div>
                </div>

                <div style={{wordBreak: 'break-all', marginTop: 10, ...this.props.resultStyle}}>
                    {convertedValue}
                </div>
            </div>
        );
    }
}