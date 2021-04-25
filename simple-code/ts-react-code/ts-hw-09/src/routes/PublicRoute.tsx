//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ component: Component, isAuth, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props =>
			isAuth && routeProps.restricted ? (
				<Redirect to="/contacts" />
			) : (
				<Component {...props} />
			)
		}
	/>
);

const mapStateToProps = state => ({
	isAuth: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
