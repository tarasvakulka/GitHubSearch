import { LOGIN_USER, SET_ACCESS_TOKEN } from '../actionTypes';

export function loginUser(data) {
    return {
        type: LOGIN_USER,
        payload: data
    };
}

export function setAccessToken(data) {
    return {
        type: SET_ACCESS_TOKEN,
        payload: data
    };
}