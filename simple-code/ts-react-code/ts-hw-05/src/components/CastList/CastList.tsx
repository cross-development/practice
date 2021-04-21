//Utils
import { defaultUrl } from 'utils/getPosterUrl';
//Assets
import getDefaultAvatar from 'assets/unnamed.jpg';
//Helpers
import { TCast } from 'helpers/types';
//Styles
import styles from './CastList.module.css';

interface IProps {
	castsData: TCast[];
}

const CastList = ({ castsData }: IProps) => (
	<ul className={styles.list}>
		{castsData.map(({ cast_id, name, profile_path }) => (
			<li key={cast_id} className={styles.listItem}>
				<img
					src={profile_path ? `${defaultUrl}${profile_path}` : getDefaultAvatar}
					alt={name}
					className={styles.avatar}
				/>
				<span>{name}</span>
			</li>
		))}
	</ul>
);

export default CastList;
