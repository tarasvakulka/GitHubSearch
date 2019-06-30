import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from '../actionTypes';
import ServerConfig from '../../config/serverConfig';
import asyncStorageConfig from '../../config/asyncStorageConfig';

function requestLogin(params) {
    return axios({
        method: 'get',
        url: `${ServerConfig.DOMAIN}login/oauth/access_token`,
        params: {
            client_id: ServerConfig.CLIENT_ID,
            client_secret: ServerConfig.CLIENT_SECRET,
            code: params.code
        }
    });
}

function* loginWorker(action) {
    const { payload: { params, resolve, reject } } = action;
    try {
        const response = yield call(requestLogin, params);
        if (response.data.indexOf('error') !== -1) throw response;
        const accessToken = response.data.slice(13, response.data.indexOf('&'));
        yield put({ type: LOGIN_USER_SUCCESS, payload: response });
        yield call(AsyncStorage.setItem, asyncStorageConfig.ACCESS_TOKEN, accessToken);
        yield call(resolve);
    } catch (error) {
        yield put({ type: LOGIN_USER_FAILURE, error });
        yield call(reject);
    }
}

export function* actionLoginWatcher() {
    yield takeLatest(LOGIN_USER, loginWorker)
}