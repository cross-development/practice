import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, putData } from './actions';

const fetchData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	return await response.json();
};

function* workerLoadData() {
	const data = yield call(fetchData);

	yield put(putData(data));
}

export function* watchLoadData() {
	yield takeEvery(LOAD_DATA, workerLoadData);
}
