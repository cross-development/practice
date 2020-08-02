//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Styles
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<ul className={styles.navigationList}>
			<li className={styles.navigationListItem}>
				<NavLink
					exact
					to="/"
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Home
				</NavLink>
			</li>

			<li className={styles.navigationListItem}>
				<NavLink
					to="/shows"
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Shows
				</NavLink>
			</li>
		</ul>
	);
};

export default Navigation;
