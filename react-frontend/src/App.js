import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Start from './components/Start.js';
import Home from './components/Home.js';

function App() {
	return (
		<div id="main-card" className="shadow">
			<Router>
				<Switch>
					<Route path="/" exact component={Start} />
					<Route path="/home" exact component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
