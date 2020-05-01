export const initialState = {
	items: {
		items: [
			{ name: 'item 2', price: { actual: 319, display: 900 }, discount: 64 },
			{ name: 'item 3', price: { actual: 319, display: 900 }, discount: 64 },
			{ name: 'item 4', price: { actual: 319, display: 900 }, discount: 64 },
			{ name: 'item 5', price: { actual: 319, display: 900 }, discount: 64 },
			{ name: 'item 6', price: { actual: 319, display: 900 }, discount: 64 },
			{ name: 'item 7', price: { actual: 319, display: 900 }, discount: 64 },
			{ name: 'item 8', price: { actual: 500, display: 900 }, discount: 64 }
		]
	},
	filteredItems: {},
	cartItems: [],
	sortedItems: [],
	searchItems: {},
	searchVal: ''
};

export function shoppingListReducer(state = initialState, action) {
	switch (action.type) {
		case 'changeRangeValue':
			return { ...state, selectedRange: action.value };
		case 'hideShowPopup':
			return { ...state, modalPopup: action.value };
		case 'selectRange':
			return { ...state, selectedVal: action.value };
		case 'resetFilter':
			return { ...state, selectedRange: initialState.minFilter };
		case 'filterItems':
			return { ...state, filteredItems: action.value };
		case 'sortItems':
			return { ...state, filteredItems: action.value };
		case 'SEARCH_ITMES':
			if (state.searchVal) {
				return { ...state, searchItems: action.value };
			} else {
				return { ...state, searchItems: { ...state.filteredItems } };
			}
		case 'SET_SEARCH_KEY':
			return { ...state, searchVal: action.value };
		case 'RESET':
			return { ...initialState };
		default:
			return state;
	}
}
