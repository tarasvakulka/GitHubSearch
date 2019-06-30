import { all } from 'redux-saga/effects';
import { actionLoginWatcher } from './auth/sagas';
import { actionReposLoadWatcher } from './search/sagas';

export default function* rootSaga() {
    yield all([
        actionLoginWatcher(),
        actionReposLoadWatcher()
    ]);
}