import axios from 'axios/index';
import {SEARCH_REPOSITORIES_SUCCESS, SEARCH_REPOSITORIES_FAILURE, SEARCH_REPOSITORIES} from '../actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import ServerConfig from "../../config/serverConfig";

function requestRepositories(params) {
    return axios({
        method: 'get',
        url: `${ServerConfig.API_DOMAIN}search/repositories`,
        params: {
            q: params.query
        }
    }).catch(error => {

    });
}

function* searchRepositoriesWorker(action) {
    const { payload: { params, resolve, reject } } = action;
    try {
        const response = yield call(requestRepositories, params);
        yield put({ type: SEARCH_REPOSITORIES_SUCCESS, payload: response.data });
        yield call(resolve, response);
    } catch (error) {
        yield put({ type: SEARCH_REPOSITORIES_FAILURE, error });
        yield call(reject, error);
    }
}

export function* actionReposSearchWatcher() {
    yield takeLatest(SEARCH_REPOSITORIES, searchRepositoriesWorker)
}