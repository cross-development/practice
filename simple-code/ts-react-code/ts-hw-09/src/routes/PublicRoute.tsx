//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';

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

const mapStateToProps = (state: IStoreState) => ({
	isAuth: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
