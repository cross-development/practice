//Core
import { Component, ChangeEvent, FormEvent } from 'react';
//Styles
import styles from './Searchbar.module.css';

interface IProps {
	onSubmit: (query: string) => void;
}

interface IState {
	value: string;
}

export default class Searchbar extends Component<IProps, IState> {
	state = {
		value: '',
	};

	handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void =>
		this.setState({ value });

	handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		this.props.onSubmit(this.state.value);
		this.setState({ value: '' });
	};

	render() {
		return (
			<header className={styles.searchbar}>
				<form className={styles.searchForm} onSubmit={this.handleSubmit}>
					<button type="submit" className={styles.button}>
						<span className={styles.label}>Search</span>
					</button>

					<input
						autoFocus
						type="text"
						autoComplete="off"
						className={styles.input}
						onChange={this.handleChange}
						value={this.state.value}
						placeholder="Search images and photos"
					/>
				</form>
			</header>
		);
	}
}
