//Styles
import styles from './Notification.module.css';

interface IProps {
	message?: string | 'No information';
}

const Notification = ({ message }: IProps) => (
	<div className={styles.notification}>
		<p className={styles.message}>{message}</p>
	</div>
);

export default Notification;
