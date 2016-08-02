import {postFetch} from '../../lib/api';

const {
    ENCODE_INPUT_REQUEST,
    ENCODE_INPUT_REQUEST_SUCCESS,
    ENCODE_INPUT_REQUEST_FAILURE
} = require('../../lib/constants').default;

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