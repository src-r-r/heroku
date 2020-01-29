import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import reducers
import reserveFlag from './reserveFlag.reducer';
import falseFlag from './falseFlag.reducer';
import errors from './error.reducer';


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'theme', 'compareBoardId', 'templateType']
}


const rootReducer = combineReducers({
	reserveFlag,
	falseFlag,
	errors
});

export default persistReducer(persistConfig, rootReducer);