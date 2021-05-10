import { fork } from 'redux-saga/effects';
import { loadNotesWatcher } from './loadNotesWatcher';
import { saveNotesWatcher } from './saveNotesWatcher';

export function* rootSaga() {
	yield fork(loadNotesWatcher);
	yield fork(saveNotesWatcher);
}
