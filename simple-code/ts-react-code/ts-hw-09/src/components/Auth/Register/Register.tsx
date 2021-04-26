//Core
import { ChangeEvent, FormEvent } from 'react';
//Styles
import styles from './Register.module.css';

interface IProps {
	name: string;
	email: string;
	password: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Register = ({ name, email, password, onChange, onSubmit }: IProps) => (
	<form onSubmit={onSubmit} className={styles.form}>
		<label className={styles.label}>
			Name
			<input
				className={styles.input}
				required
				type="text"
				name="name"
				value={name}
				autoComplete="off"
				onChange={onChange}
			/>
		</label>

		<label className={styles.label}>
			Email
			<input
				className={styles.input}
				required
				type="email"
				name="email"
				value={email}
				autoComplete="off"
				onChange={onChange}
			/>
		</label>

		<label className={styles.label}>
			Password
			<input
				className={styles.input}
				required
				type="password"
				name="password"
				value={password}
				autoComplete="off"
				onChange={onChange}
			/>
		</label>

		<button className={styles.button} type="submit">
			Register
		</button>
	</form>
);

export default Register;
