import { LOAD_REPOSITORIES } from '../actionTypes';
import { put, takeLatest, all } from 'redux-saga/effects';

function* loadRepositories() {
    const json = yield fetch('https://newsapi.org/v1/articles?')
        .then(response => response.json());
    yield put({ type: 'REPOSITORIES_RECEIVED', json: json });
}

export function* actionReposLoadWatcher() {
    yield takeLatest(LOAD_REPOSITORIES, loadRepositories)
}