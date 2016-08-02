import { combineReducers } from 'redux';
import {default as encode} from './encode/encodeReducer';

/**
 * Export our root reducer
 * @param  {Object-Reducer} {auth reducer}
 * @return {Object-Reducer} root reducer
 */
export default combineReducers({
	encode
});
