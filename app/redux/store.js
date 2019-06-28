import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const NODE_ENV = process.env.NODE_ENV;

let middleware;

if (NODE_ENV === 'development') {
    middleware = composeWithDevTools(applyMiddleware(thunk));
} else {
    middleware = applyMiddleware(thunk);
}

export default createStore(rootReducer, middleware);