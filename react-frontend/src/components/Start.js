import React from 'react';

import profileImg from '../profile.jpg';

const Start = () => {
	return (
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
	);
};

export default Start;
