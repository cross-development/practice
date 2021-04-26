//Core
import { ChangeEvent, FormEvent } from 'react';
//Styles
import styles from './Login.module.css';

interface IProps {
	email: string;
	password: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Login = ({ email, password, onChange, onSubmit }: IProps) => (
	<form onSubmit={onSubmit} className={styles.form}>
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

		<button type="submit" className={styles.button}>
			Login
		</button>
	</form>
);

export default Login;
