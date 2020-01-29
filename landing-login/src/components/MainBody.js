import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noDropDownFlag, falseFlag } from '../actions';
import { bindActionCreators } from 'redux';

// Import css and component for this
import SignUpArea from './SignUpArea';
import LogInArea from './LogInArea';


class MainBody extends Component {
	constructor(props) {
		super(props);

		this.onLogIn = this.onLogIn.bind(this);
		this.onSignUp = this.onSignUp.bind(this);

		this.state = {
			visible: false,
			title: ''
		}
	}

	componentWillReceiveProps(newProps) {
		
		if (this.state.title === '') {
			this.setState({
				visible: true,
				title: newProps.reserveTitle.title
			});
		}

		if (newProps.reserveTitle.title === this.state.title) {
			if (newProps.reserveTitle.flag === true) {
				this.setState({
					visible: true,
					title: newProps.reserveTitle.title
				});
				
			} else {
				this.setState({
					visible: !this.state.visible,
					title: ''
				});

				// save btn status
				this.props.falseFlag(false);
			}
			

			
		} else {
			this.setState({
				visible: true,
				title: newProps.reserveTitle.title
			});

			// save btn status
			this.props.falseFlag(true);
		}
	}

	onLogIn() {
		this.setState({
			title: 'login'
		});

		const data = {
			flag: true,
			title: 'login'
		}
		this.props.noDropDownFlag(data);
	}

	onSignUp() {
		this.setState({
			title: 'signup'
		});

		const data = {
			flag: true,
			title: 'signup'
		}
		this.props.noDropDownFlag(data);
	}

	render() {
		return (
			<>
				{
					(this.state.visible) ?
						<div className="MainBody">
							<div style={{display: 'flex'}}>
								{
									(this.state.title === 'login') ?
										<>
											<div name="signup" onClick={this.onSignUp} className="inactive-btn">Sign Up</div>
											<div name="login" onClick={this.onLogIn} className="active-btn">Log In</div>
										</>
									:
										<>
											<div name="signup" onClick={this.onSignUp} className="active-btn">Sign Up</div>
											<div name="login" onClick={this.onLogIn} className="inactive-btn">Log In</div>
										</>
								}
								
							</div>
							{
								(this.state.title === 'login') ?
									<h1>Log In for free</h1>
								:
									<h1>Sign Up for free</h1>
							}
							{
								(this.state.title === 'login') ?
									<LogInArea />
								:
									<SignUpArea />
							}
						</div>
					:
						<div className="hidden"></div>
				}
					
			</>
		);
	}
}

const mapStateToProps = state => ({
  reserveTitle: state.reserveFlag
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    noDropDownFlag,
    falseFlag
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);