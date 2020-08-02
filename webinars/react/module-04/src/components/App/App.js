//Core
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//Views
import HomePage from '../../view/HomePage';
import MoviesPage from '../../view/MoviesPage';
import MovieDetailsPage from '../../view/MovieDetailsPage';
import NotFoundPage from '../../view/NotFoundPage';
//Components
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
//Routes
import routes from '../../routes';

const App = () => {
	return (
		<>
			<Layout>
				<Header />

				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shows" component={MoviesPage} />
					<Route path="/shows/:showId" component={MovieDetailsPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Layout>
		</>
	);
};

export default App;
