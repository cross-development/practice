//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Styles
import styles from './AuthNav.module.css';

const AuthNav = () => (
	<div className={styles.authContainer}>
		<NavLink to="/register" exact className={styles.link} activeClassName={styles.activeLink}>
			Register
		</NavLink>
		<NavLink to="/login" exact className={styles.link} activeClassName={styles.activeLink}>
			Login
		</NavLink>
	</div>
);

export default AuthNav;
