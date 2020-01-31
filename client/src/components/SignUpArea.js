import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpRequest, errors } from '../actions';
import { bindActionCreators } from 'redux';
import { MDBModal } from 'mdbreact';


class SignUpArea extends Component {
	constructor(props) {
		super(props);

		this.onSignUp = this.onSignUp.bind(this);
		this.onChange = this.onChange.bind(this);
		this.fadeOut = this.fadeOut.bind(this);

		this.state = {
			name: '',
			phone: '',
			city: '',
			country: '',
			modal: false
		}
	}

	onSignUp(e) {
		e.preventDefault();
		const data = {
			name: this.state.name,
			phone: this.state.phone,
			city: this.state.city,
			country: this.state.country
		}


		if (data.name === '' || data.phone === '' || data.city === '' || data.country === '') {
			this.props.errors("Please Enter Your Data");
			return false;
		}

		// signup
		this.props.signUpRequest(data);

		this.setState({
			modal: !this.state.modal
		});
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		this.props.errors('');
	}

	fadeOut() {
		setTimeout(() => {
			this.setState({
				modal: false
			})
		}, 3000);
	}

	render() {
		return (
			<>
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

					<button className="common-btn">SIGN UP</button>
				</form>
				{
					(this.state.modal) ?
						<MDBModal isOpen={this.state.modal} className="success-modal">
							<span>
								THANK YOU FOR JOINING PLUGsmile, Please use our Amazon Alexa Skill to Get Started
							</span>
							{this.fadeOut()}
						</MDBModal>
					:
						<div className="hidden"></div>
				}
						
			</>
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