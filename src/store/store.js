import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware, compose } from 'redux';

import loaderVisibility from '../middlewears/loaderVisibility';
import reducer from './index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, loaderVisibility];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = (initialState = {}) => {
    const storeIn = createStore(reducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);

    return storeIn;
};

export default store;
