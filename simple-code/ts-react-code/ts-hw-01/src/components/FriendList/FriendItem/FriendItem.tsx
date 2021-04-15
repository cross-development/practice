//Styles
import styles from './FriendListItem.module.css';

type TDefaultAvatar = 'https://cdn.snagfilms.com/3e/39/86ae58964745b0c9c5ad76adec0b/anonymous-user.png';

interface IProps {
	avatar?: string | TDefaultAvatar;
	name: string;
	isOnline: boolean;
}

const FriendItem = ({ avatar, name, isOnline }: IProps) => (
	<li className={styles.item}>
		<span className={isOnline ? styles.online : styles.offline}></span>
		<img className={styles.avatar} src={avatar} alt={name} width="48" />
		<p className={styles.name}>{name}</p>
	</li>
);

export default FriendItem;
