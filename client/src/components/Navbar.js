import React, { Component } from 'react';
import { connect } from 'react-redux';



// Import css and components for this
import logo from '../imgs/logo.png';
import background from '../imgs/pattaya.jpg';
import LinkBtn from './global-components/linkBtn';


class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			compareKey: ''
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			compareKey: newProps.reserveTitle.title
		})
	}

	render() {
		return (
			<div className="Navbar-wrapper">
				<img src={logo} className="logo" alt="logo" title="logo" />
				<LinkBtn title="Sign Up"  linkKey="signup" compareKey={this.state.compareKey} />
				<LinkBtn title="Log In" linkKey="login" compareKey={this.state.compareKey} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
  reserveTitle: state.reserveFlag
});

export default connect(mapStateToProps)(Navbar);
