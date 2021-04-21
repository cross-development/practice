//Styles
import styles from './ButtonGoBack.module.css';

interface IProps {
	onChangeClick: () => void;
}

const ButtonGoBack = ({ onChangeClick }: IProps) => (
	<div className={styles.buttonWrapper}>
		<button className={styles.button} type="submit" onClick={onChangeClick}>
			Go Back
		</button>
	</div>
);

export default ButtonGoBack;
