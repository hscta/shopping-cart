import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import allReducers from './reducers';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const storeConfiguration = () => {
	let store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));

	let persistor = persistStore(store);
	return { store, persistor };
};

export default storeConfiguration;
