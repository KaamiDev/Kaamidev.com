import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Start from './components/Start.js';

function App() {
	return (
		<div id="main-card" className="shadow">
			<Router>
				<Switch>
					<Route path="/" exact component={Start} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
