import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SnailLoader from '../common/SnailLoader';
import styleVariables from '../../lib/styleVariables.json';
import {capitalizeFirstLetter} from '../../lib/convert';

export default class ConvertForm extends Component {

    onConvertClick() {
        let rawText = this.refs[this.props.convertType + "Text"].getValue();
        this.props.onConvertClick(rawText);
    }

    render() {
        let convertedValue = this.props.convertedValue ? this.props.convertedValue : '';

        return (
            <div className='content-box'>
                <div>
                    <TextField
                        ref={this.props.convertType + "Text"}
                        floatingLabelText={"Enter text to " + this.props.convertType + "..."}
                        floatingLabelFocusStyle={{color: styleVariables.colors.plcHldr}}
                        underlineFocusStyle={{borderColor: styleVariables.colors.plcHldr}}
                        textareaStyle={this.props.textareaStyle}
                        multiLine={true}
                        fullWidth={true}/>
                </div>
                <div style={{position: 'relative'}}>
                    <RaisedButton fullWidth={true} label={capitalizeFirstLetter(this.props.convertType)}
                                  onClick={() => this.onConvertClick()}
                                  backgroundColor={this.props.buttonBackgroundColor}
                                  labelColor={this.props.buttonLabelColor}/>
                    <div style={{position: 'absolute', top: -7, right: 0}}>
                        <SnailLoader isLoading={this.props.isFetchingConvertResult}/>
                    </div>
                </div>
                <div style={{wordBreak: 'break-all', marginTop: 10, ...this.props.resultStyle}}>
                    {convertedValue}
                </div>
            </div>
        );
    }
}