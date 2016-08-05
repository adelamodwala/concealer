import {postFetch} from '../../lib/api';

const {
    ENCODE_INPUT_REQUEST,
    ENCODE_INPUT_REQUEST_SUCCESS,
    ENCODE_INPUT_REQUEST_FAILURE,

    DECODE_INPUT_REQUEST,
    DECODE_INPUT_REQUEST_SUCCESS,
    DECODE_INPUT_REQUEST_FAILURE
} = require('../../lib/constants').default;

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
        return sendEncodeInputRequest(rawText);
    }
}

function sendEncodeInputRequest(rawText) {
    return (dispatch) => {
        let opts = {
            endpoint: '/encodeBase64',
            body: JSON.stringify({text: rawText})
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
        return sendDecodeInputRequest(rawText);
    }
}

function sendDecodeInputRequest(rawText) {
    return (dispatch) => {
        let opts = {
            endpoint: '/decodeBase64',
            body: JSON.stringify({text: rawText})
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