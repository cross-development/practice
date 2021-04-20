//Core
import React from 'react';
import PropTypes from 'prop-types';
//Utils
import posterUrl from 'utils/getPosterUrl';
//Assets
import defaultPoster from 'assets/default_poster.jpg';
//Styles
import styles from './MovieDetails.module.css';

const MovieDetails = ({ movieData }) => {
	const { poster_path, title, name, release_date, popularity, overview, genres } = movieData;

	const posterPath = poster_path ? `${posterUrl}${poster_path}` : defaultPoster;
	const genresList = genres.map(({ name }) => `${name} `);
	const releaseDate = release_date.substring(0, 4);
	const userScore = Math.round(popularity);
	const movieTitle = title || name;

	return (
		<div className={styles.movieWrapper}>
			<div className={styles.posterWrapper}>
				<img src={posterPath} alt={movieTitle} />
			</div>

			<div className={styles.detailsWrapper}>
				<h1>
					{movieTitle} ({releaseDate})
				</h1>
				<p>User Score: {userScore}%</p>
				<h2>Overview</h2>
				<p>{overview}</p>
				<h3>Genres</h3>
				<p>{genresList}</p>
			</div>
		</div>
	);
};

MovieDetails.propTypes = {
	movieData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
