//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import { Error } from 'components/Commons';
import { Login } from 'components/Auth';
//Redux
import { connect } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

class LoginView extends Component {
	static propTypes = {
		onLogin: PropTypes.func.isRequired,
		hasError: PropTypes.object,
	};

	static defaultProps = {
		hasError: null,
	};

	state = {
		email: '',
		password: '',
	};

	handleChange = ({ target: { name, value } }) =>
		this.setState({ [name]: value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onLogin({ ...this.state });
		this.setState({ email: '', password: '' });
	};

	defineErrorType = () => {
		const { hasError } = this.props;
		return hasError && hasError.config.url.includes('login');
	};

	render() {
		const isErrorTypeLogin = this.defineErrorType();

		return (
			<>
				<Login
					{...this.state}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>

				{isErrorTypeLogin && (
					<Error message="User with this email address not found" />
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({
	hasError: authSelectors.hasError(state),
});

const mapDispatchToProps = {
	onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
