import { LOAD_REPOSITORIES } from '../actionTypes';

const initialState = {

};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_REPOSITORIES:
            return {
                ...state
            };
        default:
            return state;
    }
}