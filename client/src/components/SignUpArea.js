import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpRequest, errors } from '../actions';
import { bindActionCreators } from 'redux';

class SignUpArea extends Component {
	constructor(props) {
		super(props);

		this.onSignUp = this.onSignUp.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			name: '',
			phone: '',
			city: '',
			country: ''
		}
	}

	onSignUp(e) {
		e.preventDefault();
		const data = {
			username: this.state.name,
			phone: this.state.phone,
			city: this.state.city,
			country: this.state.country
		}

		if (data.name === '' && data.phone === '' && data.city === '' && data.country === '') {
			this.props.errors("Please Enter Your Data!");
			return false;
		}


		// signup
		this.props.signUpRequest(data);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		this.props.errors("");
	}

	render() {
		return (
			<form onSubmit={this.onSignUp} className="sign-form">
				
				{/*Name*/}
				<input
				style={{margin: 0}}
				className="common-input"
				value={this.state.name}
				onChange={this.onChange}
				name="name"
				placeholder="Full Name"
				/>
				{
					(this.state.name === '') ?
						<div className="place-star FullName">*</div>
					:
						<div className="hidden"></div>
				}

				{/*Phone Number*/}
				<input
				className="common-input"
				value={this.state.phone}
				onChange={this.onChange}
				name="phone"
				placeholder="Phone Number"
				/>
				{
					(this.state.phone === '') ?
						<div className="place-star Phone">*</div>
					:
						<div className="hidden"></div>
				}

				{/*Country*/}
				<input
				className="common-input"
				value={this.state.country}
				onChange={this.onChange}
				name="country"
				placeholder="Your Country"
				/>
				{
					(this.state.country === '') ?
						<div className="place-star Country">*</div>
					:
						<div className="hidden"></div>
				}

				{/*City*/}
				<input
				className="common-input"
				value={this.state.city}
				onChange={this.onChange}
				name="city"
				placeholder="Your City"
				/>
				{
					(this.state.city === '') ?
						<div className="place-star City">*</div>
					:
						<div className="hidden"></div>
				}

				<button className="common-btn">GET STARTED</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signUpRequest,
    errors
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUpArea);