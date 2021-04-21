//Styles
import styles from './Notification.module.css';

interface IProps {
	message: string;
}

const Notification = ({ message }: IProps) => (
	<div className={styles.errorWrapper}>
		{`${message}` === 'Failed to fetch' ? (
			<>
				<p>Sorry!</p>
				<p>
					Check your internet connection and try again. We couldn't connect to
					the server.
				</p>
			</>
		) : (
			<p>{message}</p>
		)}
	</div>
);

export default Notification;
