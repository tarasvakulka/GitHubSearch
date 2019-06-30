import {
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_SUCCESS,
    SEARCH_REPOSITORIES_LOAD_MORE,
    CLEAR_SEARCH_REPOSITORIES
} from '../actionTypes';

const initialState = {
    searchLoader: false,
    repositories: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_REPOSITORIES:
            return {
                ...state,
                searchLoader: true
            };
        case SEARCH_REPOSITORIES_SUCCESS:
            return {
                ...state,
                repositories: action.payload.items,
                searchLoader: false
            };
        case SEARCH_REPOSITORIES_LOAD_MORE:
            return {
                ...state,
                repositories: [
                    ...state.repositories,
                    ...action.payload.items
                ],
                searchLoader: false
            };
        case CLEAR_SEARCH_REPOSITORIES:
            return {
                ...state,
                repositories: null
            };
        default:
            return state;
    }
}