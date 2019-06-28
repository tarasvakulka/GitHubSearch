import { combineReducers } from 'redux';

import auth from './auth/reducer';
import search from './search/reducer';

const rootReducer = combineReducers({
    auth,
    search
});

export default rootReducer;