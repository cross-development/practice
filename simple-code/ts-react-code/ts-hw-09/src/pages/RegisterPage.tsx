//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import { Error } from 'components/Commons';
import { Register } from 'components/Auth';
//Redux
import { connect } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

class RegisterView extends Component {
	static propTypes = {
		onRegister: PropTypes.func.isRequired,
		hasError: PropTypes.object,
	};

	static defaultProps = {
		hasError: null,
	};

	state = {
		name: '',
		email: '',
		password: '',
	};

	handleChange = ({ target: { name, value } }) =>
		this.setState({ [name]: value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onRegister({ ...this.state });
		this.setState({ name: '', email: '', password: '' });
	};

	defineErrorType = () => {
		const { hasError } = this.props;
		return hasError && hasError.config.url.includes('signup');
	};

	render() {
		const isErrorTypeRegister = this.defineErrorType();

		return (
			<>
				<Register
					{...this.state}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>

				{isErrorTypeRegister && (
					<Error message="User with this email already exists" />
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({
	hasError: authSelectors.hasError(state),
});

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
