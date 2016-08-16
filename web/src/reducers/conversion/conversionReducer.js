import {CONCEAL_METHODS} from '../../lib/constants';

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

const initialState = {
    concealingMethod: CONCEAL_METHODS.BASE64,
    isFetchingConcealResult: false,
    concealedValue: null,
    revealingMethod: CONCEAL_METHODS.BASE64,
    isFetchingRevealResult: false,
    revealedValue: null
};

export default function conversionReducer(state = initialState, action) {
    switch (action.type) {
        case CONCEAL_INPUT_REQUEST:
            return {
                ...state,
                isFetchingConcealResult: true
            }

        case CONCEAL_INPUT_REQUEST_SUCCESS:
            return {
                ...state,
                isFetchingConcealResult: false,
                concealedValue: action.concealedValue
            }

        case CONCEAL_INPUT_REQUEST_FAILURE:
            return {
                ...state,
                isFetchingConcealResult: false
            }

        case REVEAL_INPUT_REQUEST:
            return {
                ...state,
                isFetchingRevealResult: true
            }

        case REVEAL_INPUT_REQUEST_FAILURE:
        case REVEAL_INPUT_REQUEST_SUCCESS:
            return {
                ...state,
                isFetchingRevealResult: false,
                revealedValue: action.revealedValue
            }

        case SET_CONCEALING_METHOD:
            return {
                ...state,
                concealingMethod: action.concealingMethod
            }

        case SET_REVEALING_METHOD:
            return {
                ...state,
                revealingMethod: action.revealingMethod
            }

        default:
            return {
                ...state
            }
    }
}