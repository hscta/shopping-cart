export const initialState = {
	items:
	{
		"items": [
			{
				"name": "Samsung Series 4",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 13999,
					"display": 22500
				},
				"discount": 37
			},
			{
				"name": "Samsung Super 6",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 35999,
					"display": 66900
				},
				"discount": 46
			},
			{
				"name": "Samsung The Frame",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 84999,
					"display": 133900
				},
				"discount": 36
			},
			{
				"name": "Thomson B9 Pro",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 9999,
					"display": 16999
				},
				"discount": 41
			},
			{
				"name": "LG Ultra HD",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 39990,
					"display": 79990
				},
				"discount": 50
			},
			{
				"name": "Vu Ready LED TV",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 7999,
					"display": 17e3
				},
				"discount": 52
			},
			{
				"name": "Koryo Android TV",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 55999,
					"display": 199990
				},
				"discount": 71
			},
			{
				"name": "Micromax LED Smart",
				"image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
				"price": {
					"actual": 9999,
					"display": 27990
				},
				"discount": 64
			}
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
