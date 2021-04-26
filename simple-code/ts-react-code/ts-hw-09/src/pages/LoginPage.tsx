//Core
import { Component, ChangeEvent, FormEvent } from 'react';
//Components
import { Error } from 'components/Commons';
import { Login } from 'components/Auth';
//Redux
import { connect } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';

interface IProps {
	hasError: any | null;
	onLogin: ({ email, password }: IState) => void;
}

interface IState {
	email: string;
	password: string;
}

class LoginPage extends Component<IProps, IState> {
	state = {
		email: '',
		password: '',
	};

	defineErrorType = (): boolean => {
		const { hasError } = this.props;
		return hasError && hasError.config.url.includes('login');
	};

	handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>): void =>
		this.setState({ [name]: value } as Pick<IState, keyof IState>);

	handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		this.props.onLogin({ ...this.state });
		this.setState({ email: '', password: '' });
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

const mapStateToProps = (state: IStoreState) => ({
	hasError: authSelectors.hasError(state),
});

const mapDispatchToProps = {
	onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
