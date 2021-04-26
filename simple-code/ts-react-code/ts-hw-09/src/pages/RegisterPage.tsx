//Core
import { Component, ChangeEvent, FormEvent } from 'react';
//Components
import { Error } from 'components/Commons';
import { Register } from 'components/Auth';
//Redux
import { connect } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';

interface IProps {
	hasError: any | null;
	onRegister: ({ name, email, password }: IState) => void;
}

interface IState {
	name: string;
	email: string;
	password: string;
}

class RegisterPage extends Component<IProps, IState> {
	state = {
		name: '',
		email: '',
		password: '',
	};

	defineErrorType = (): boolean => {
		const { hasError } = this.props;
		return hasError && hasError.config.url.includes('signup');
	};

	handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>): void =>
		this.setState({ [name]: value } as Pick<IState, keyof IState>);

	handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		this.props.onRegister({ ...this.state });
		this.setState({ name: '', email: '', password: '' });
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

const mapStateToProps = (state: IStoreState) => ({
	hasError: authSelectors.hasError(state),
});

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
