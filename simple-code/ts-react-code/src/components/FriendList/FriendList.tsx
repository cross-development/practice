//Components
import FriendItem from './FriendItem';
//Styles
import styles from './FriendList.module.css';

type TFriend = {
	id: number;
	avatar?: string;
	name: string;
	isOnline: boolean;
};

interface IProps {
	friends: TFriend[];
}

const FriendList = ({ friends }: IProps) => (
	<ul className={styles.friendList}>
		{friends.map(({ avatar, name, isOnline, id }) => (
			<FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
		))}
	</ul>
);

export default FriendList;
