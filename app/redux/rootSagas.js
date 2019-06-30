import { all } from 'redux-saga/effects';
import { actionLoginWatcher } from './auth/sagas';
import { actionReposSearchWatcher } from './search/sagas';

export default function* rootSaga() {
    yield all([
        actionLoginWatcher(),
        actionReposSearchWatcher()
    ]);
}