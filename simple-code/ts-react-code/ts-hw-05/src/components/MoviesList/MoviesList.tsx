//Core
import { Link, RouteComponentProps } from 'react-router-dom';
//Utils
import { defaultUrl } from 'utils/getPosterUrl';
//Assets
import defaultPoster from 'assets/default_poster.jpg';
//Routes
import routes from 'router';
//Helpers
import { TMovieData } from 'helpers/types';
//Style
import styles from './MoviesList.module.css';

interface IProps extends RouteComponentProps {
	moviesData: TMovieData[];
}

const MoviesList = ({ moviesData, location }: IProps) => (
	<ul className={styles.list}>
		{moviesData.map(({ id, poster_path, name, title, vote_average }) => (
			<li className={styles.listItem} key={id}>
				<Link
					className={styles.itemLink}
					to={{
						pathname: `${routes.movies}/${id}`,
						state: { from: location },
					}}
				>
					<img
						className={styles.itemImage}
						src={poster_path ? `${defaultUrl}${poster_path}` : defaultPoster}
						alt={name || title}
					/>
					<span>{name || title}</span>
				</Link>
				<span className={styles.movieVote}>{vote_average}</span>
			</li>
		))}
	</ul>
);

export default MoviesList;
