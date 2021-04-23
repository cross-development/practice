//Core
import { Component, FormEvent, ChangeEvent } from 'react';
//Styles
import styles from './ContactForm.module.css';

interface IProps {
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

	handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		this.props.onAddContact(this.state.name, this.state.number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number } = this.state;

		return (
			<form className={styles.form} onSubmit={this.handleFormSubmit}>
				<label>
					Name
					<input
						required
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
						required
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

export default ContactForm;
