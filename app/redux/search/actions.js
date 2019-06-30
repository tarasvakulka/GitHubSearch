import { SEARCH_REPOSITORIES } from '../actionTypes';

export function searchRepositories(data) {
    return {
        type: SEARCH_REPOSITORIES,
        payload: data
    };
}