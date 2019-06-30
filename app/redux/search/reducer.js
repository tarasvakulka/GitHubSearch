import { SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_SUCCESS } from '../actionTypes';

const initialState = {
    repositories: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_REPOSITORIES:
            return {
                ...state
            };
        case SEARCH_REPOSITORIES_SUCCESS:
            return {
                ...state,
                repositories: action.payload.items
            };
        default:
            return state;
    }
}