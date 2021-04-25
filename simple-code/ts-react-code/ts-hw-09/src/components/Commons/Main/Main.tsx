//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Main.module.css';

const Main = ({ children }) => <main className={styles.main}>{children}</main>;

Main.propTypes = {
	children: PropTypes.node,
};

export default Main;
