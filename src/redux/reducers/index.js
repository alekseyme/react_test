import { combineReducers } from 'redux';

import numsReducer from './nums';

const rootReducer = combineReducers({
	nums: numsReducer,
});

export default rootReducer;
