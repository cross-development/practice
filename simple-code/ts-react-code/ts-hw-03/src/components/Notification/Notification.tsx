//Style
import style from './Notification.module.css';

interface IProps {
	message: string;
}

const Notification = ({ message }: IProps) => (
	<div className={style.errorWrapper}>
		<p>Oops, something went wrong...</p>
		<p>{message}</p>
	</div>
);

export default Notification;
