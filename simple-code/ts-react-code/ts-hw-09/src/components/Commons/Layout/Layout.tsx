//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import AppBar from '../../Header/AppBar';
//Styles
import styles from './Layout.module.css';

const Layout = ({ children }) => (
	<div className={styles.container}>
		<AppBar />
		{children}
	</div>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
