export const initialState = {
	filteredItems: {},
	cartItems: [],
	sortedItems: []
};

export function cartReducer(state = initialState, action) {
	switch (action.type) {
		case 'addToCart':
			return { ...state, cartItems: [ ...state.cartItems, action.value ] };
		case 'INCREMENT_QTY':
			let items = [ ...state.cartItems ];
			items[action.value].qty += 1;
			return { ...state, cartItems: items };
		case 'DECREMENT_QTY':
			let citems = [ ...state.cartItems ];
			citems[action.value].qty -= 1;
			citems[action.value].qty = citems[action.value].qty <= 0 ? 1 : citems[action.value].qty;
			return { ...state, cartItems: citems };

		case 'REMOVE_ITEM':
			let ritems = [ ...state.cartItems ];
			ritems.splice(action.value, 1);
			return { ...state, cartItems: ritems };

		case 'RESET_CART':
			return { ...initialState };

		default:
			return state;
	}
}
