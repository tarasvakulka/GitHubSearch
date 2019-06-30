import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const NODE_ENV = process.env.NODE_ENV;

const sagaMiddleware = createSagaMiddleware();

let middleware;

if (NODE_ENV === 'development') {
    middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
} else {
    middleware = applyMiddleware(sagaMiddleware);
}

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;