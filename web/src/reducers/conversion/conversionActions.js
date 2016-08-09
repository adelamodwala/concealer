import {postFetch} from '../../lib/api';

const {
    ENCODE_INPUT_REQUEST,
    ENCODE_INPUT_REQUEST_SUCCESS,
    ENCODE_INPUT_REQUEST_FAILURE,

    DECODE_INPUT_REQUEST,
    DECODE_INPUT_REQUEST_SUCCESS,
    DECODE_INPUT_REQUEST_FAILURE,

    SET_ENCODING_METHOD,
    SET_DECODING_METHOD
} = require('../../lib/actionKeys').default;

/**
 * Encode
 */
export function encodeInputRequest() {
    return {
        type: ENCODE_INPUT_REQUEST
    }
}

export function encodeInputRequestSuccess(encodedValue) {
    return {
        type: ENCODE_INPUT_REQUEST_SUCCESS,
        encodedValue
    }
}

export function encodeInputRequestFailure() {
    return {
        type: ENCODE_INPUT_REQUEST_FAILURE
    }
}

export function encodeInput(rawText) {
    return (dispatch, getState) => {
        dispatch(encodeInputRequest());
        return sendEncodeInputRequest(rawText, getState().conversion.encodingMethod);
    }
}

function sendEncodeInputRequest(rawText, encodingMethod) {
    return (dispatch) => {
        let opts = {
            endpoint: '/encodeInput',
            body: JSON.stringify({text: rawText, method: encodingMethod})
        };
        
        return postFetch(opts)
            .then((response) => {
                let json;
                if(response.ok) {
                    json = response.json();
                }
                else {
                    json = {"error": "Please enter a valid encoded value"}
                }
                return json;
            })
            .then((json) => {
                if(typeof json == "string") {
                    dispatch(encodeInputRequestSuccess(json));
                }
                else {
                    dispatch(encodeInputRequestFailure());
                }
            })
    }
}

/**
 * Decode
 */
export function decodeInputRequest() {
    return {
        type: DECODE_INPUT_REQUEST
    }
}

export function decodeInputRequestSuccess(decodedValue) {
    return {
        type: DECODE_INPUT_REQUEST_SUCCESS,
        decodedValue
    }
}

export function decodeInputRequestFailure(decodedValue) {
    return {
        type: DECODE_INPUT_REQUEST_FAILURE,
        decodedValue
    }
}

export function decodeInput(rawText) {
    return (dispatch, getState) => {
        dispatch(decodeInputRequest());
        return sendDecodeInputRequest(rawText, getState().conversion.decodingMethod);
    }
}

function sendDecodeInputRequest(rawText, decodingMethod) {
    return (dispatch) => {
        let opts = {
            endpoint: '/decodeInput',
            body: JSON.stringify({text: rawText, method: decodingMethod})
        };

        return postFetch(opts)
            .then((response) => {
                let json;
                if(response.ok) {
                    json = response.json();
                }
                else {
                    json = {"error": "Please enter a valid encoded value"}
                }
                return json;
            })
            .then((json) => {
                if(typeof json == "string") {
                    dispatch(decodeInputRequestSuccess(json));
                }
                else {
                    dispatch(decodeInputRequestFailure(json.error));
                }
            })
    }
}

/**
 * Conversion method changes
 */
export function setEncodingMethod(encodingMethod) {
    return {
        type: SET_ENCODING_METHOD,
        encodingMethod
    }
}

export function setDecodingMethod(decodingMethod) {
    return {
        type: SET_DECODING_METHOD,
        decodingMethod
    }
}