const {
    ENCODE_INPUT_REQUEST,
    ENCODE_INPUT_REQUEST_SUCCESS,
    ENCODE_INPUT_REQUEST_FAILURE
} = require('../../lib/constants').default;

const initialState = {
    isFetchingEncodeResult: false,
    encodedValue: null
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

        default:
            return {
                ...state
            }
    }
}