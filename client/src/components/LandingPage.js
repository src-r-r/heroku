import React, { Component } from 'react';


// Import components and css for this
import './style.css';
import Navbar from './Navbar';
import MainBody from './MainBody';
import SlideTitle from './SlideTitle';
import AlertBox from './AlertBox';


class LandingPage extends Component {
	render() {
		return (
			<div className="LandingPage">
				<Navbar />
				<MainBody />
				<SlideTitle />
				<AlertBox />
			</div>
		);
	}
}

export default LandingPage;