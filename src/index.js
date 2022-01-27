import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import  createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';
import App from './components/App/App';




const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
    }),
    applyMiddleware(sagaMiddleware, logger),

);
    sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));