//Styles
import styles from './Button.module.css';

interface IProps {
	label?: string | 'Search';
	onLoad: () => void;
}

const Button = ({ label, onLoad }: IProps) => (
	<button type="submit" className={styles.button} onClick={onLoad}>
		{label}
	</button>
);

export default Button;
