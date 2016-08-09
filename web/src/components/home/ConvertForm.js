import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SnailLoader from '../common/SnailLoader';
import styleVariables from '../../lib/styleVariables.json';
import {capitalizeFirstLetter} from '../../lib/convert';
import {CONVERSION_METHODS} from '../../lib/constants';

export default class ConvertForm extends Component {

    onConvertClick() {
        let rawText = this.refs[this.props.convertType + "Text"].getValue();
        this.props.onConvertClick(rawText);
    }

    onChangeConversionMethod(value) {
        console.log(value);
        this.props.onChangeConversionMethod(value);
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
                </div>
                <div style={{position: 'relative'}}>
                    <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <div style={{flex: 3}}>
                            <RaisedButton fullWidth={true} label={capitalizeFirstLetter(this.props.convertType)}
                                          onClick={() => this.onConvertClick()}
                                          backgroundColor={this.props.buttonBackgroundColor}
                                          labelColor={this.props.buttonLabelColor}
                                          style={{marginTop: 12}}
                            />
                            <div style={{position: 'absolute', top: -7, right: 0}}>
                                <SnailLoader isLoading={this.props.isFetchingConvertResult}/>
                            </div>
                        </div>
                        <div style={{flex: 1}}>
                            <DropDownMenu value={this.props.conversionMethod}
                                          onChange={(event, index, value) => this.onChangeConversionMethod(value)}
                                          labelStyle={{color: styleVariables.colors.floater}}
                                          underlineStyle={{borderColor: styleVariables.colors.floater}}>
                                <MenuItem value={CONVERSION_METHODS.BASE64} primaryText={CONVERSION_METHODS.BASE64}/>
                                <MenuItem value={CONVERSION_METHODS.MD5} primaryText={CONVERSION_METHODS.MD5}/>
                                <MenuItem value={CONVERSION_METHODS.SHA256} primaryText={CONVERSION_METHODS.SHA256}/>
                                <MenuItem value={CONVERSION_METHODS.AES} primaryText={CONVERSION_METHODS.AES}/>
                            </DropDownMenu>
                        </div>
                    </div>
                </div>
                <div style={{wordBreak: 'break-all', marginTop: 10, ...this.props.resultStyle}}>
                    {convertedValue}
                </div>
            </div>
        );
    }
}