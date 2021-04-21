//Core
import { Component, ChangeEvent, FormEvent } from 'react';
//Components
import Notification from '../Commons/Notification';
//Styles
import styles from './SearchForm.module.css';

interface IProps {
	onSubmit: (value: string) => void;
}

interface IState {
	value: string;
	hasError: boolean;
}
export default class SearchForm extends Component<IProps, IState> {
	state = {
		value: '',
		hasError: false,
	};

	handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void =>
		this.setState({ value });

	handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const { value } = this.state;

		if (!value || value === ' ') {
			return this.setState({ hasError: true });
		}

		this.props.onSubmit(value);
		this.setState({ value: '', hasError: false });
	};

	render() {
		const { value, hasError } = this.state;

		return (
			<>
				<div className={styles.searchbar}>
					<form onSubmit={this.handleSubmit} className={styles.form}>
						<input
							required
							autoFocus
							type="text"
							value={value}
							autoComplete="off"
							className={styles.input}
							placeholder="Search movie..."
							onChange={this.handleChange}
						/>

						<button type="submit" className={styles.button}>
							<span className={styles.label}>Search</span>
						</button>
					</form>
				</div>

				{hasError && <Notification message="Please enter any movie name" />}
			</>
		);
	}
}
