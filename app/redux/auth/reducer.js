import { LOGIN_USER } from '../actionTypes';

const initialState = {
    access_token: '12345'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state
            };
        default:
            return state;
    }
}