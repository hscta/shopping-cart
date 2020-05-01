import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Search from '../SearchComponent/search';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

function Header() {
	// useEffect(() => {}, [ cartItems ]);
	const [ showHideSearch, setShowHide ] = useState(false);
	const shoppingCart = useSelector((state) => state.shoppingLIstReducer);
	const cartItems = useSelector((state) => state.cartReducer.cartItems);

	const history = useHistory();
	const dispatch = useDispatch();

	let reset = () => {
		dispatch({ type: 'RESET' });
		dispatch({ type: 'RESET_CART' });
		history.push('/');
	};

	return (
		<header>
			<div className="star" onClick={(e) => reset()} style={{ cursor: 'pointer' }}>
				<svg
					className="bi bi-star-fill"
					width="1em"
					height="1em"
					viewBox="0 0 16 16"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
				</svg>
			</div>

			<div className="second">
				{showHideSearch && <Search />}

				<div className="search" onClick={(e) => setShowHide((prevState) => !prevState)}>
					<svg
						className="bi bi-search"
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
							clip-rule="evenodd"
						/>
						<path
							fill-rule="evenodd"
							d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div
					style={{ cursor: 'pointer' }}
					className="add-to-cart"
					onClick={(e) => {
						history.push('/cart');
					}}
				>
					<FontAwesomeIcon icon={faShoppingCart} />
					{cartItems.length ? <span className="cartCnt">{cartItems.length}</span> : null}
				</div>
			</div>
		</header>
	);
}

export default Header;
