import { combineReducers } from 'redux';
import {default as conversion} from './conversion/conversionReducer';

/**
 * Export our root reducer
 * @param  {Object-Reducer} {auth reducer}
 * @return {Object-Reducer} root reducer
 */
export default combineReducers({
	conversion
});
