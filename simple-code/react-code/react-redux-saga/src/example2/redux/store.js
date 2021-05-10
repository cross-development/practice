import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { watchLoadData } from './sagas';

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(watchLoadData);

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
