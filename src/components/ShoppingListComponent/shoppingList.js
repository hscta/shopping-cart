import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './shoppingList.css';
import Filter from '../FilterComponent/filter';
import Sort from '../SortComponent/sort';
import item1Img from '../../img1.jpeg';
import { initialState, shoppingListReducer } from '../../reducers/shoppingListReducer';

const ShoppingList = () => {
	const shoppingListObj = useSelector((state) => state.shoppingListReducer);
	const cartItems = useSelector((state) => state.cartReducer.cartItems);
	const dispatch = useDispatch();


	useEffect(()=> {
			console.log('sssssssssssssssssssssss');
			fetch("../../data.json", {
				credentials:'same-origin',
				method:'GET',
				mode:'cors',
				headers:{
					'Content-Type': 'application/json',
					'Accept':'application/json'
				}
			})
			.then(res=>res.json())
			.then (res=>console.log(res))
	},[]);

	let filteredItems = { ...shoppingListObj.filteredItems };

	if (Object.keys(shoppingListObj.searchItems).length) {
		filteredItems = { ...shoppingListObj.searchItems };
	}

	return (
		<div className="container-fluid">
			<div className="row d-lg-none  text-center">
				<div className="col sortFilters text-center">
					<Sort filteredItems={shoppingListObj.filteredItems} shoppingListDispatch={dispatch} />
				</div>
				<div className="col sortFilters">
					<Filter items={shoppingListObj.items} shoppingListDispatch={dispatch} />
				</div>
			</div>

			<div className="row">
				<div className="d-none d-xs-none d-lg-block col-lg-2 ">
					<Filter items={shoppingListObj.items} shoppingListDispatch={dispatch} />
				</div>

				<div className="col-sm-* col-lg-10">
					<div className="row">
						<div className="d-none d-xs-none d-lg-block ">
							<Sort filteredItems={shoppingListObj.filteredItems} shoppingListDispatch={dispatch} />
						</div>
						<div className="col-lg-12 items">
							{filteredItems.hasOwnProperty('items') &&
								filteredItems.items.map((item, k) => {
									return (
										<div key={k} className="item">
											<img src={item.image} alt={item.name} />
											<div>{item.name}</div>
											<div>
												<span>{item.price.actual}</span> &nbsp;
												<span className="displayPrice">
													<strike>{item.price.display}</strike>
												</span>&nbsp;
												<span className="discount">{`${item.discount}% off`}</span>
											</div>
											{cartItems.some((o) => o.name === item.name) ? (
												<p>Added to Cart</p>
											) : (
												<input
													type="button"
													className="add-to-cart-btn"
													value="Add to cart"
													onClick={(e) =>
														dispatch({
															type: 'addToCart',
															value: Object.assign({}, item, { qty: 1 })
														})}
												/>
											)}
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingList;
