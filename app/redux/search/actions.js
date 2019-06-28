import { LOAD_REPOSITORIES } from '../actionTypes';

export function loadRepositories() {
    return {
        type: LOAD_REPOSITORIES,
        payload: {}
    };
}