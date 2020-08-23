import React from 'react';

import profileImg from '../profile.jpg';

const Home = () => {
	return (
		<div id="home-page">
			<div className="home-heading">
				<img src={profileImg} alt="profile pic" className="shadow" />
				<h1>KaamiDev</h1>
				<h3>Full Stack Web Developer</h3>
				<div className="nav-half shadow2">
					<ul>
						<li>Home</li>
						<li>Projects</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
			<div className="home-body">
				<p>
					Hi, I am Kaami, a self taught full stack web developer with experience in HTML, CSS, Node.js, and
					React.js. I have 3+ years of experience in web development and a lot of passion goes into all my
					websites and projects.
					<br />
					<br />
					I have over a dozen projects, many of which can be found here on this website. Feel free to give me
					feedback as I am always open to some constructive criticism. I am most proficient in JS though I do
					have moderate experience in both Python and VB.NET.
					<br />
					<br />
					If you have any questions or if you would like a website made, feel free to contact me via twitter,
					email, or simply the contact page of this website.
				</p>
			</div>
		</div>
	);
};

export default Home;
