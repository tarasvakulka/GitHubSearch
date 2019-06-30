import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    SET_ACCESS_TOKEN
} from '../actionTypes';

const initialState = {
    accessToken: null,
    loginLoader: false,
    loginError: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginLoader: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                accessToken: action.payload,
                loginLoader: false
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loginError: action.payload,
                loginLoader: false
            };
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            };
        default:
            return state;
    }
}