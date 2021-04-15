//Styles
import styles from './Profile.module.css';

type TDefaultImgUrl = 'https://pkb1.ru/assets/images/default-avatar.png';

type TStats = {
	followers: number;
	views: number;
	likes: number;
};

interface IProps {
	name: string;
	tag: string;
	location: string;
	avatar?: string | TDefaultImgUrl;
	stats: TStats;
}

const Profile = ({ name, tag, location, avatar, stats }: IProps) => {
	const { followers, views, likes } = stats;

	return (
		<div className={styles.profile}>
			<div className={styles.description}>
				<img src={avatar} alt="user avatar" className={styles.avatar} />
				<p className={styles.name}>{name}</p>
				<p className={styles.tag}>@{tag}</p>
				<p className={styles.location}>{location}</p>
			</div>

			<ul className={styles.stats}>
				<li>
					<span className={styles.label}>Followers </span>
					<span className={styles.quantity}>{followers}</span>
				</li>
				<li>
					<span className={styles.label}>Views </span>
					<span className={styles.quantity}>{views}</span>
				</li>
				<li>
					<span className={styles.label}>Likes </span>
					<span className={styles.quantity}>{likes}</span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;
