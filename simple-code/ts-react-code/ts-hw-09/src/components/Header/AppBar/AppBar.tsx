//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import Logo from '../Logo';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';
import { Loader } from 'components/Commons';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
//Styles
import styles from './AppBar.module.css';
import fadeLogo from 'animation/fadeLogo.module.css';
import { CSSTransition } from 'react-transition-group';

const AppBar = ({ isAuthenticated, getUser }) => (
	<header className={styles.header}>
		<CSSTransition
			in={true}
			classNames={fadeLogo}
			timeout={500}
			appear
			unmountOnExit
		>
			<Logo />
		</CSSTransition>

		<Navigation />

		{(getUser && <UserMenu />) || (isAuthenticated && !getUser && <Loader />)}
		{!isAuthenticated && <AuthNav />}
	</header>
);

AppBar.defaultProps = {
	isAuthenticated: null,
};

AppBar.propTypes = {
	isAuthenticated: PropTypes.string,
};

const mapStateToProps = state => ({
	getUser: authSelectors.getUserEmail(state),
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
