import React, { useReducer, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { initialState, filterReducer } from '../../reducers/filterReducer';

import "./filter.css";

const Filter = (props) => {
	const [ filterObj, dispatch ] = useReducer(filterReducer, initialState);

	const applyFilter = () => {
		let items = { ...props.items };
		dispatch({ type: 'hideShowPopup', value: false });

		if (!filterObj.selectedVal) {
			props.shoppingListDispatch({ type: 'filterItems', value: items });
			return;
		}
		let filteredVal = props.items.items.filter((o) => o.price.actual <= parseInt(filterObj.selectedVal));
		items.items = filteredVal;
		props.shoppingListDispatch({ type: 'filterItems', value: items });
	};

	useEffect(() => applyFilter(), []);

	return (
		<div>
			<div className="d-none d-xs-none d-lg-block">
				<div>Filter</div>
				<div>
					<span>0</span>
					<div>
						<input
							type="range"
							id="points"
							name="points"
							min={filterObj.minFilter}
							max={filterObj.maxFilter}
							value={filterObj.selectedVal}
							onChange={(e) => {
								dispatch({ type: 'changeRangeValue', value: e.target.value });
							}}
						/>
					</div>
					<span>10000</span>
				</div>

				<div>
					<input
						type="button"
						id="applyFilter"
						value="Apply"
						onClick={(e) => {
							applyFilter();
						}}
					/>
				</div>
			</div>

			<div className="d-lg-none text-center" onClick={(e) => dispatch({ type: 'hideShowPopup', value: true })}>
				<span className="text-center">Filter</span>
			</div>

			<Modal show={filterObj.modalPopup}>
				<Modal.Header>
					<Modal.Title>Filter Options</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input
						type="range"
						id="points"
						name="points"
						min={filterObj.minFilter}
						max={filterObj.maxFilter}
						onChange={(e) => {
							dispatch({ type: 'changeRangeValue', action: e.target.value });
						}}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={(e) => dispatch({ type: 'hideShowPopup', value: false })}>
						Cancel
					</Button>
					<Button
						variant="primary"
						onClick={(e) => {
							dispatch({ type: 'hideShowPopup', value: false });
						}}
					>
						Apply
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Filter;
