import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import  createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';
import App from './components/App/App';

//watch for functions
function* rootSaga() {
    yield takeEvery('FETCH_SEARCH', setSearch )
}

function* setSearch(action){
    try{
        console.log('made it to  search', action.payload);

        let response = yield axios.get('/api/search');

        yield put({
            type: 'SET_SEARCH',
            payload: action.payload
        })
    }
    catch (err) {
        console.error('setSearch failed', err)
    }
}
const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            console.log('sent to searchReducer', action.payload);
            return state=action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
        searchReducer
    }),
    applyMiddleware(sagaMiddleware, logger),

);
    sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));