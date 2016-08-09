import {CONVERSION_METHODS} from '../../lib/constants';

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

const initialState = {
    encodingMethod: CONVERSION_METHODS.BASE64,
    isFetchingEncodeResult: false,
    encodedValue: null,
    decodingMethod: CONVERSION_METHODS.BASE64,
    isFetchingDecodeResult: false,
    decodedValue: null
};

export default function conversionReducer(state = initialState, action) {
    switch (action.type) {
        case ENCODE_INPUT_REQUEST:
            return {
                ...state,
                isFetchingEncodeResult: true
            }

        case ENCODE_INPUT_REQUEST_SUCCESS:
            return {
                ...state,
                isFetchingEncodeResult: false,
                encodedValue: action.encodedValue
            }

        case ENCODE_INPUT_REQUEST_FAILURE:
            return {
                ...state,
                isFetchingEncodeResult: false
            }

        case DECODE_INPUT_REQUEST:
            return {
                ...state,
                isFetchingDecodeResult: true
            }

        case DECODE_INPUT_REQUEST_FAILURE:
        case DECODE_INPUT_REQUEST_SUCCESS:
            return {
                ...state,
                isFetchingDecodeResult: false,
                decodedValue: action.decodedValue
            }

        case SET_ENCODING_METHOD:
            return {
                ...state,
                encodingMethod: action.encodingMethod
            }

        case SET_DECODING_METHOD:
            return {
                ...state,
                decodingMethod: action.decodingMethod
            }

        default:
            return {
                ...state
            }
    }
}