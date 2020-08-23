import React from 'react';
import './App.css';

import profileImg from './profile.jpg';

function App() {
	return (
		<div id="main-card" className="shadow">
			<div id="start-page">
				<div className="start-heading">
					<img src={profileImg} alt="profile pic" className="shadow" />
					<h1>KaamiDev</h1>
					<h3>Full Stack Web Developer</h3>
				</div>
				<div className="nav-full shadow2">
					<ul>
						<li>Home</li>
						<li>Projects</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
