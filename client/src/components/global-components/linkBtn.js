import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reserveFlag } from '../../actions';
import { connect } from 'react-redux';
import { MDBLink } from 'mdbreact';


// Import css for this
import '../style.css';

class LinkBtn extends Component {
	constructor(props) {
		super(props);

		this.onReserve = this.onReserve.bind(this);

		this.state = {
			clicked: false,
			linkKey: ''
		}
	}

	componentWillMount() {
		this.setState({
			linkKey: this.props.linkKey,
			clicked: this.props.clicked
		});
	}

	componentWillReceiveProps(newProps) {
		if (newProps.compareKey === this.state.linkKey) {
			this.setState({
				clicked: true
			});
		} else {
			this.setState({
				clicked: false
			});
		}

		// set background as transparent
		if (newProps.falseFlag.flag === false) {
			this.setState({
				clicked: false
			});
		}
	}

	onReserve() {
		const data = {
			title: this.state.linkKey,
			flag: false
		}
		this.props.reserveFlag(data);
	}

	render() {
		return (
			<>
				{
					(this.state.clicked) ?
						<MDBLink onClick={this.onReserve} className="nav-active-btn">
							{this.props.title}
						</MDBLink>
					:
						<MDBLink onClick={this.onReserve} className="nav-btn">
							{this.props.title}
						</MDBLink>
				}
			</>
			
		);
	}
}

const mapStateToProps = state => ({
  falseFlag: state.falseFlag
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    reserveFlag
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkBtn);