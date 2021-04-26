//Styles
import styles from './Error.module.css';

interface IProps {
	message: string;
}

const Error = ({ message }: IProps) => (
	<div className={styles.errorWrapper}>
		<p className={styles.errorText}>{message}</p>
	</div>
);

export default Error;
