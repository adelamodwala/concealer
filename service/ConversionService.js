import CryptoJS from 'crypto-js';
import {CONCEAL_METHODS, REVEAL_METHODS} from '../lib/constants';

export default class ConversionService {

    concealInput(inputText, secretKey, method) {
        let concealed;

        switch(method) {
            case CONCEAL_METHODS.BASE64:
                let wordArray = CryptoJS.enc.Utf8.parse(inputText);
                concealed = CryptoJS.enc.Base64.stringify(wordArray);
                break;
            case CONCEAL_METHODS.SHA256:
                concealed = CryptoJS.SHA256(inputText).toString();
                break;
            case CONCEAL_METHODS.MD5:
                concealed = CryptoJS.MD5(inputText).toString();
                break;
            case CONCEAL_METHODS.AES:
                concealed = CryptoJS.AES.encrypt(inputText, secretKey).toString();
                break;
            default:
                concealed = "Please choose a concealing method";
                break;
        }

        return concealed;
    }

    revealInput(inputText) {
        let wordArray = CryptoJS.enc.Base64.parse(inputText);
        return CryptoJS.enc.Utf8.stringify(wordArray);
    }
}