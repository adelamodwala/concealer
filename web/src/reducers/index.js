import { combineReducers } from 'redux';

const initialState = {};

function chatReducer(state = initialState, action) {
    return {
      ...state
    }
}

/**
 * Export our root reducer
 * @param  {Object-Reducer} {auth reducer}
 * @return {Object-Reducer} root reducer
 */
export default combineReducers({
	chatReducer
});
