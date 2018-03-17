import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchEntity } from '../sagas/mainSagas';
import rootReducer from '../reducers'; //if this doesnt work, maybe its because of the index.js

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        reduxImmutableStateInvariant(),
        sagaMiddleware
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f //Enable Redux Dev Tools
    ));

    window.store = store;

    //add WatchEntity later when create the sagas
    sagaMiddleware.run(watchEntity);

    return store;
}