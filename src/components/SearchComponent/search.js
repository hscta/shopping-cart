import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './search.css';

function Search() {
	// const [searchVal, setSearchVal] = useState();
	const dispatch = useDispatch();
	const shoppingListObj = useSelector((state) => state.shoppingListReducer);

	function handleChange(e) {
		let val = e.target.value;
		dispatch({ type: 'SET_SEARCH_KEY', value: val });
	}

	useEffect(
		() => {
			let searchItems = shoppingListObj.filteredItems.items.filter((o) => o.name === shoppingListObj.searchVal);
			dispatch({ type: 'SEARCH_ITMES', value: { items: searchItems } });
		},
		[ shoppingListObj.searchVal ]
	);

	return (
		<div>
			<input
				type="text"
				value={shoppingListObj.searchVal}
				name="search"
				onChange={(e) => handleChange(e)}
				autoFocus
				autoComplete="off"
			/>
		</div>
	);
}

export default Search;
