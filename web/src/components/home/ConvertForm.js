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
                        multiLine={true}
                        fullWidth={true}/>
                </div>
                <RaisedButton label={capitalizeFirstLetter(this.props.convertType)}
                              onClick={() => this.onConvertClick()}
                              backgroundColor={styleVariables.colors.primaryBg}
                              labelColor={styleVariables.colors.primaryBgText}/>
                <div style={{wordBreak: 'break-all', marginTop: 10}}>
                    {convertedValue}
                </div>
                <SnailLoader isLoading={this.props.isFetchingConvertResult}/>
            </div>
        );
    }
}