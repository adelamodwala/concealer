import CryptoJS from 'crypto-js';

export default class ConversionService {

    concealInput(inputText) {
        let wordArray = CryptoJS.enc.Utf8.parse(inputText);
        return CryptoJS.enc.Base64.stringify(wordArray);
    }

    revealInput(inputText) {
        let wordArray = CryptoJS.enc.Base64.parse(inputText);
        return CryptoJS.enc.Utf8.stringify(wordArray);
    }
}