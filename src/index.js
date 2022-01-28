import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './components/App/App';

//watch for functions
function* rootSaga() {
	yield takeEvery('FETCH_SEARCH', setSearch);

	yield takeEvery('ADD_FAVORITE', addFavorite);
	yield takeEvery('FETCH_FAVORITE', fetchFavorite);
}

//______________________________________________
/* SEARCH */
function* setSearch(action) {
	try {
		console.log('made it to  search', action.payload);

		let newSearch = action.payload;
		let response = yield axios.get(`/api/search?q=${newSearch}`);
		console.log('response in setSearch is:', response);

		yield put({
			type: 'SET_SEARCH',
			payload: response.data.data
		});
	} catch (err) {
		console.error('setSearch failed', err);
	}
}

const searchReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_SEARCH':
			console.log('sent to searchReducer', action.payload);
			return action.payload;
		default:
			return state;
	}
};
//_______________________________________________________
/* FAVORITE */
const getFavorite = (state = [], action) => {
	switch (action.type) {
		case 'SET_FAVORITE':
			console.log('Get favorite', action.payload);
			return action.payload;
		default:
			return state;
	}
};

function* fetchFavorite() {
	try {
		const response = yield axios.get('/api/favorite');
		console.log(response.data);
		// put effect is dispatch
		yield put({ type: 'SET_FAVORITE', payload: response.data });
	} catch (error) {
		console.log('error with favorite get request', error);
	}
}

function* addFavorite(action) {
	// Setting the url to action.payload
	let url = action.payload.url;
    let alt = action.payload.alt;
	console.log('The url appearing in addFavorite reducer', url);
	try {
		yield axios.post('/api/favorite', { url, alt });
		yield put({ type: 'FETCH_FAVORITE' });
	} catch (error) {
		console.error('error with post request', error);
	}
}
//____________________________________________

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	combineReducers({
		searchReducer,
		getFavorite
	}),
	applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
