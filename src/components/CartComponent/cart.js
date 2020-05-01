import React, { useEffect ,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import item1Img from '../../img1.jpeg';
import './cart.css';

import FA from 'react-fontawesome';

const initVal = {actual:0, discount:0, total:0}

function Cart() {
	const [cPrice, setPrice] = useState(initVal);
	const cartItems = useSelector((state)=>state.cartReducer.cartItems);
	const dispatch = useDispatch();
	const cItems = cartItems;

	useEffect(() => {
		getTotal();
	},[cartItems]);

	function getTotal () {
		let priceDetails = {...initVal};
		for (let idx in cartItems) {
			priceDetails.actual += (cartItems[idx].price.display * cartItems[idx].qty);
			priceDetails.discount += (((cartItems[idx].price.display /cartItems[idx].price.actual ) * 100)* cartItems[idx].qty);
		}

		priceDetails.total = (priceDetails.actual - priceDetails.discount);

		setPrice(priceDetails);
	}

	return (
		<div className="cart-container">
			<div className="items-list">
				{cItems.map((item, idx) => {
					return(
						<div className="cart-item">
							<img src={item1Img} alt={item.name} />
							<div className="item-name">{item.name}</div>
							<div className="item-details">
								<div >
									<span>{item.price.actual}</span>
									<span><strike>{item.price.display}</strike> </span>
									<span>{item.discount}% off</span>
								</div>
								<div>
									<span className="icons" >
										<FA name="plus-circle" onClick={(e) => {											
										dispatch({type:'INCREMENT_QTY', value:idx})
									}}/>
									</span>
									<span >{item.qty}</span>
									<span  className="icons">
										<FA name="minus-circle" onClick={(e) => {
										dispatch({type:'DECREMENT_QTY', value:idx})
									}}/>
									</span>
								</div>
								<div className="remove-item" onClick={(e)=>{
									dispatch({type:'REMOVE_ITEM', value:idx})}}>
										<strong>remove</strong>
								</div>
							</div>
							
						</div>
					)
				})}
			</div>
			<div style={{padding:'1rem'}}>
			<div className="price-details">
				<div className="price-deatails-heading">Price Details</div>
				<div>Price ({cartItems.length} item)  :{cPrice.actual} </div>
				<div>Discount  : {cPrice.discount.toFixed(2)}</div>

			<div>Total : {cPrice.total.toFixed(2)}</div>

			</div>

			</div>

	
		</div>
	);
}

export default Cart;
