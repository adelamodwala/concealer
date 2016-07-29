import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * Add middlewares
 * @param  {func} thunkMiddleware  Async middleware for redux
 * @return {func} Composed middleware
 */
const enhancer = compose(
  applyMiddleware(thunkMiddleware)
);

/**
 * Create the store with a given initial state
 * @param  {Object} initialState
 * @return {func}   The middleware-configured store
 */
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
