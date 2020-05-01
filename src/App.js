import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/HeaderComponent/header';
import Dashboard from './components/Dashboard/dashboard';
import Footer from './components/FooterComponent/footer';
import ShoppingList from './components/ShoppingListComponent/shoppingList';
import Cart from './components/CartComponent/cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div>
					<Switch>
						<Route path="/shopping-list">
							<ShoppingList />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
						<Route path="/">
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
