//Core
import { lazy } from 'react';

const HomePage = lazy(
	() => import('pages/HomePage' /* webpackChunkName: "home-page */),
);

const MoviesPage = lazy(
	() => import('pages/MoviesPage' /* webpackChunkName: "movies-page*/),
);

const Cast = lazy(() => import('pages/Cast' /* webpackChunkName: "cast-page */));

const Reviews = lazy(
	() => import('pages/Reviews' /* webpackChunkName: "reviews-page*/),
);

const MovieDetailsPage = lazy(
	() =>
		import('pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page */),
);

const NotFoundPage = lazy(
	() => import('pages/NotFoundPage' /* webpackChunkName: "not-found-page */),
);

const asyncComponents = {
	Cast,
	Reviews,
	HomePage,
	MoviesPage,
	NotFoundPage,
	MovieDetailsPage,
};

export default asyncComponents;
