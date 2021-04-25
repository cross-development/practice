//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Error.module.css';

const Error = ({ message }) => (
	<div className={styles.errorWrapper}>
		<p className={styles.errorText}>{message}</p>
	</div>
);

Error.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Error;
