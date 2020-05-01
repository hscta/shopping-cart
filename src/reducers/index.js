import {combineReducers} from 'redux';
import {filterReducer} from './filterReducer';
import {shoppingListReducer} from './shoppingListReducer';
import {cartReducer} from './cartReducer';

const mainReducer = combineReducers({
	filterReducer,
	shoppingListReducer,
	cartReducer
});

const rootReducer = (state, action) => {
	return mainReducer(state, action);
};

export default rootReducer;
