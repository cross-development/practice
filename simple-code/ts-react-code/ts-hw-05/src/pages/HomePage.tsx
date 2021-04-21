//Core
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
//Components
import Loader from 'components/Commons/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Commons/Notification';
//Services
import movieApi from 'services/movieApi';
//Helpers
import { TMovieData } from 'helpers/types';

interface IProps extends RouteComponentProps {}

interface IState {
	movies: TMovieData[];
	errorMessage: string;
	isLoading: boolean;
}

export default class HomePage extends Component<IProps, IState> {
	state = {
		movies: [],
		errorMessage: '',
		isLoading: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });

		movieApi
			.fetchTrendMovies()
			.then(movies => this.setState({ movies }))
			.catch(errorMessage => this.setState({ errorMessage }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { movies, errorMessage, isLoading } = this.state;

		return (
			<>
				{errorMessage && <Notification message={errorMessage} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && (
					<MoviesList {...this.props} moviesData={movies} />
				)}
			</>
		);
	}
}
