import React, { Component } from 'react';
import { connect } from 'react-redux';


class AlertBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: ''
		}
	}

	componentWillReceiveProps(newProps) {
		console.log("error")
		console.log(newProps)
		this.setState({
			error: newProps.errors.error
		});
	}

	render() {
		return (
			<>
				{
					(this.state.error !== '') ?
						<div className="AlertBox">
							{this.state.error}
						</div>
					:
						<div className="hidden"></div>
				}
			</>
				
		);
	}
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(AlertBox);