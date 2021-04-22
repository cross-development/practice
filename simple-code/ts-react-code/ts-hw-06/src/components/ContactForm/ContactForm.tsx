//Core
import { Component, ChangeEvent, FormEvent } from 'react';
//HOC
import withTheme from 'helpers/hoc/withTheme';
//Helpers
import { IContext } from 'helpers/interfaces';
//Styles
import styles from './ContactForm.module.css';

interface IProps {
	ctxTheme: IContext;
	onAddContact: (name: string, number: string) => void;
}

interface IState {
	name: string;
	number: string;
}

export class ContactForm extends Component<IProps, IState> {
	state = {
		name: '',
		number: '',
	};

	handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>): void =>
		this.setState({ [name]: value } as Pick<IState, keyof IState>);

	handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		this.props.onAddContact(this.state.name, this.state.number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const {
			state: { name, number },
			props: { ctxTheme },
		} = this;

		const { theme, themeStyle } = ctxTheme;

		const mainThemeStyle =
			theme === 'dark' ? themeStyle.dark : themeStyle.light;

		return (
			<form
				className={styles.form}
				onSubmit={this.handleSubmit}
				style={mainThemeStyle}
			>
				<label>
					Name
					<input
						autoFocus
						type="text"
						name="name"
						value={name}
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Number
					<input
						type="text"
						name="number"
						value={number}
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
					/>
				</label>

				<button className={styles.button} type="submit">
					Add contact
				</button>
			</form>
		);
	}
}

export default withTheme(ContactForm);
