import React, { Component } from 'react';

class LogInArea extends Component {
	constructor(props) {
		super(props);

		this.onLogIn = this.onLogIn.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			email: '',
			password: ''
		}

	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onLogIn(e) {
		e.preventDefault();
		alert("Login")
	}

	render() {
		return (
			<form onSubmit={this.onLogIn}>
				<input
				className="common-input"
				style={{margin: 0}}
				value={this.state.email}
				onChange={this.onChange}
				placeholder="Enter Email"
				name="email"
				/>

				<input
				className="common-input"
				value={this.state.password}
				onChange={this.onChange}
				placeholder="Enter Password"
				name="password"
				/>

				<button className="common-btn">LOG IN</button>
			</form>
		);
	}
}

export default LogInArea;