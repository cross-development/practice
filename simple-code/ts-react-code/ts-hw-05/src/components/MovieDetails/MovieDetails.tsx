//Utils
import { defaultUrl } from 'utils/getPosterUrl';
//Assets
import defaultPoster from 'assets/default_poster.jpg';
//Helpers
import { TMovieDetails } from 'helpers/types';
//Styles
import styles from './MovieDetails.module.css';

interface IProps {
	movieData: TMovieDetails;
}

const MovieDetails = ({ movieData }: IProps) => {
	const {
		poster_path,
		title,
		name,
		release_date,
		popularity,
		overview,
		genres,
	} = movieData;

	const posterPath = poster_path
		? `${defaultUrl}${poster_path}`
		: defaultPoster;
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

export default MovieDetails;
