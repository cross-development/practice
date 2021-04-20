//Core
import React from 'react';
import PropTypes from 'prop-types';
//Utils
import posterUrl from 'utils/getPosterUrl';
//Assets
import getDefaultAvatar from 'assets/unnamed.jpg';
//Styles
import styles from './CastList.module.css';

const CastList = ({ castsData }) => (
	<ul className={styles.list}>
		{castsData.map(({ cast_id, name, profile_path }) => (
			<li key={cast_id} className={styles.listItem}>
				<img
					src={profile_path ? `${posterUrl}${profile_path}` : getDefaultAvatar}
					alt={name}
					className={styles.avatar}
				/>
				<span>{name}</span>
			</li>
		))}
	</ul>
);

CastList.propTypes = {
	castsData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default CastList;
