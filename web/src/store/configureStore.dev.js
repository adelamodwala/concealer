import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

/**
 * Add middlewares
 * @param  {func} thunkMiddleware  Async middleware for redux
 * @return {func} Composed middleware
 */
const enhancer = compose(
  applyMiddleware(thunkMiddleware, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * Create the store with a given initial state
 * @param  {Object} initialState
 * @return {func}   The middleware-configured store
 */
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
