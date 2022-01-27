import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import  createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';
import App from './components/App/App';

//watch fro functions
  function* rootSaga() {
      yield takeEvery ('SET_SEARCH', setSearch )
  }

  function* setSearch(){
      try{
          console.log('made it to  search');

          let response = yield axios.get('/category');
          console.log('response.data:', response.data);

          yield put({
              type: "",
              payload: response.data
          })
      }
      catch (err) {
          console.err('setSearch failed', err)
      }
  }


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
    }),
    applyMiddleware(sagaMiddleware, logger),

);
    sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));