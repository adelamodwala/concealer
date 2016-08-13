import {postFetch} from '../../lib/api';

const {
    CONCEAL_INPUT_REQUEST,
    CONCEAL_INPUT_REQUEST_SUCCESS,
    CONCEAL_INPUT_REQUEST_FAILURE,

    REVEAL_INPUT_REQUEST,
    REVEAL_INPUT_REQUEST_SUCCESS,
    REVEAL_INPUT_REQUEST_FAILURE,

    SET_CONCEALING_METHOD,
    SET_REVEALING_METHOD
} = require('../../lib/actionKeys').default;

/**
 * Conceal
 */
export function concealInputRequest() {
    return {
        type: CONCEAL_INPUT_REQUEST
    }
}

export function concealInputRequestSuccess(concealedValue) {
    return {
        type: CONCEAL_INPUT_REQUEST_SUCCESS,
        concealedValue
    }
}

export function concealInputRequestFailure() {
    return {
        type: CONCEAL_INPUT_REQUEST_FAILURE
    }
}

export function concealInput(rawText) {
    return (dispatch, getState) => {
        dispatch(concealInputRequest());
        return sendConcealInputRequest(rawText, getState().conversion.concealingMethod);
    }
}

function sendConcealInputRequest(rawText, concealingMethod) {
    return (dispatch) => {
        let opts = {
            endpoint: '/concealInput',
            body: JSON.stringify({text: rawText, method: concealingMethod})
        };
        
        return postFetch(opts)
            .then((response) => {
                let json;
                if(response.ok) {
                    json = response.json();
                }
                else {
                    json = {"error": "Please enter a valid value for concealing"}
                }
                return json;
            })
            .then((json) => {
                if(typeof json == "string") {
                    dispatch(concealInputRequestSuccess(json));
                }
                else {
                    dispatch(concealInputRequestFailure());
                }
            })
    }
}

/**
 * Reveale
 */
export function revealInputRequest() {
    return {
        type: REVEAL_INPUT_REQUEST
    }
}

export function revealInputRequestSuccess(revealedValue) {
    return {
        type: REVEAL_INPUT_REQUEST_SUCCESS,
        revealedValue
    }
}

export function revealInputRequestFailure(revealedValue) {
    return {
        type: REVEAL_INPUT_REQUEST_FAILURE,
        revealedValue
    }
}

export function revealInput(rawText) {
    return (dispatch, getState) => {
        dispatch(revealInputRequest());
        return sendRevealInputRequest(rawText, getState().conversion.revealingMethod);
    }
}

function sendRevealInputRequest(rawText, revealingMethod) {
    return (dispatch) => {
        let opts = {
            endpoint: '/revealInput',
            body: JSON.stringify({text: rawText, method: revealingMethod})
        };

        return postFetch(opts)
            .then((response) => {
                let json;
                if(response.ok) {
                    json = response.json();
                }
                else {
                    json = {"error": "Please enter a valid concealed value"}
                }
                return json;
            })
            .then((json) => {
                if(typeof json == "string") {
                    dispatch(revealInputRequestSuccess(json));
                }
                else {
                    dispatch(revealInputRequestFailure(json.error));
                }
            })
    }
}

/**
 * Conversion method changes
 */
export function setConcealingMethod(concealingMethod) {
    return {
        type: SET_CONCEALING_METHOD,
        concealingMethod
    }
}

export function setRevealingMethod(revealingMethod) {
    return {
        type: SET_REVEALING_METHOD,
        revealingMethod
    }
}