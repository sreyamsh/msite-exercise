import React from "react";
import "./App.css";
import StickyHeader from "./components/sticky-header";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<StickyHeader />
			<main>
				<Switch>
					<Route
						path="/"
						render={(props) => <HomePage {...props} title="Home" />}
						exact
					/>
					<Route
						path="/products-list"
						render={(props) => <Products {...props} title="Products List" />}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
