import axios from 'axios/index';
import {
    SEARCH_REPOSITORIES_SUCCESS,
    SEARCH_REPOSITORIES_FAILURE,
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_LOAD_MORE
} from '../actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import ServerConfig from "../../config/serverConfig";

function requestRepositories(params) {
    return axios({
        method: 'get',
        url: `${ServerConfig.API_DOMAIN}search/repositories`,
        params: {
            ...params
        }
    });
}

function* searchRepositoriesWorker(action) {
    const { payload: { params, resolve, reject, loadMore } } = action;
    try {
        const response = yield call(requestRepositories, params);
        if (loadMore) {
            yield put({ type: SEARCH_REPOSITORIES_LOAD_MORE, payload: response.data });
        } else {
            yield put({ type: SEARCH_REPOSITORIES_SUCCESS, payload: response.data });
        }
        yield call(resolve, response);
    } catch (error) {
        yield put({ type: SEARCH_REPOSITORIES_FAILURE, error });
        yield call(reject, error);
    }
}

export function* actionReposSearchWatcher() {
    yield takeLatest(SEARCH_REPOSITORIES, searchRepositoriesWorker)
}