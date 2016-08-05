const {
    ENCODE_INPUT_REQUEST,
    ENCODE_INPUT_REQUEST_SUCCESS,
    ENCODE_INPUT_REQUEST_FAILURE,

    DECODE_INPUT_REQUEST,
    DECODE_INPUT_REQUEST_SUCCESS,
    DECODE_INPUT_REQUEST_FAILURE
} = require('../../lib/constants').default;

const initialState = {
    isFetchingEncodeResult: false,
    encodedValue: null,
    isFetchingDecodeResult: false,
    decodedValue: null
};

export default function encodeReducer(state = initialState, action) {
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

        case DECODE_INPUT_REQUEST_SUCCESS:
            return {
                ...state,
                isFetchingDecodeResult: false,
                decodedValue: action.decodedValue
            }

        case DECODE_INPUT_REQUEST_FAILURE:
            return {
                ...state,
                isFetchingDecodeResult: false
            }

        default:
            return {
                ...state
            }
    }
}