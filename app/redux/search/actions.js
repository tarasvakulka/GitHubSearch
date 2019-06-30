import { SEARCH_REPOSITORIES, CLEAR_SEARCH_REPOSITORIES } from '../actionTypes';

export function searchRepositories(data) {
    return {
        type: SEARCH_REPOSITORIES,
        payload: data
    };
}

export function clearSearchRepositories() {
    return {
        type: CLEAR_SEARCH_REPOSITORIES
    };
}