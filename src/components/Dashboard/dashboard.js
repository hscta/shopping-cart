import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Search from '../SearchComponent/search';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';

function Dashboard() {
	return (
		<Link to="/shopping-list">
			<h3>Go to Shopping List</h3>
		</Link>
	);
}

export default Dashboard;
