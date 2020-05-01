import React, { useState, useEffect, useReducer } from 'react';
import './sort.css';

const sortParams = {
	highLow: 1,
	lowHigh: 2,
	discount: 3,
	none: 0
};
const initialState = {
	sortVal: 0
};

function sortReducer(state, action) {
	switch (action.type) {
		case 'onChangeSortVal':
			return { ...state, sortVal: action.value };

		default:
			return state;
	}
}

function Sort(props) {
	let [ state, dispatch ] = useReducer(sortReducer, initialState);

	const applySort = () => {
		let filteredItems = { ...props.filteredItems };
		if (!Object.keys(filteredItems).length) return;

		let sortedItems = [];
		if (state.sortVal === 1) {
			sortedItems = props.filteredItems.items.sort(function(a, b) {
				return b.price.actual - a.price.actual;
			});
		} else if (state.sortVal === 2) {
			sortedItems = props.filteredItems.items.sort(function(a, b) {
				return a.price.actual - b.price.actual;
			});
		} else if (state.sortVal === 3) {
			sortedItems = props.filteredItems.items.filter((o) => o.hasOwnProperty('discount'));
		} else {
			sortedItems = props.filteredItems.items;
		}

		filteredItems.items = sortedItems;

		props.shoppingListDispatch({ type: 'sortItems', value: filteredItems });
	};

	return (
		<div className="row">
			<div className="col text-justify sorting-lg d-none d-xs-none d-lg-block ">
				Sort By
				<span
					className={state.sortVal === sortParams['highLow'] ? 'sort-lg selectedSort' : 'sort-lg'}
					onClick={(e) => {
						dispatch({ type: 'onChangeSortVal', value: sortParams['highLow'] });
						applySort();
					}}
				>
					Price -- High Low
				</span>
				<span
					className={state.sortVal === sortParams['lowHigh'] ? 'sort-lg selectedSort' : 'sort-lg'}
					onClick={(e) => {
						dispatch({ type: 'onChangeSortVal', value: sortParams['lowHigh'] });
						applySort();
					}}
				>
					Price -- Low High
				</span>
				<span
					className={state.sortVal === sortParams['discount'] ? 'sort-lg selectedSort' : 'sort-lg'}
					onClick={(e) => {
						dispatch({ type: 'onChangeSortVal', value: sortParams['discount'] });
						applySort();
					}}
				>
					Price -- Discount
				</span>
			</div>

			<div className=" d-lg-none text-center">Sort</div>
		</div>
	);
}

export default Sort;
