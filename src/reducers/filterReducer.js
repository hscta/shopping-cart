export const initialState = {
	selectedVal: 10000,
	minFilter: 0,
	maxFilter: 10000,
	modalPopup: false
};

export function filterReducer(state=initialState, action) {
	switch (action.type) {
		case 'changeRangeValue':
			return { ...state, selectedVal: action.value };
		case 'hideShowPopup':
			return { ...state, modalPopup: action.value };
		case 'selectRange':
			return { ...state, selectedVal: action.value };
		case 'resetFilter':
			return { ...state, selectedRange: initialState.minFilter };
		default:
			return state;
	}
}
