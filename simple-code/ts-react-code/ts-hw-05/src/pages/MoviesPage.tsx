//Core
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
//Components
import Loader from 'components/Commons/Loader';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import Notification from 'components/Commons/Notification';
//Services
import movieApi from 'services/movieApi';
//Utils
import { getQueryString } from 'utils/getQueryString';
//Helpers
import { TMovieData } from 'helpers/types';

interface IProps extends RouteComponentProps {}

interface IState {
	movies: TMovieData[];
	errorMessage: string;
	isLoading: boolean;
}

export default class MoviesPage extends Component<IProps, IState> {
	state = {
		movies: [],
		errorMessage: '',
		isLoading: false,
	};

	componentDidMount() {
		const query = getQueryString(this.props.location.search);

		return query ? this.fetchMovies(query) : null;
	}

	componentDidUpdate(prevProps: IProps, prevState: IState) {
		const prevQuery = getQueryString(prevProps.location.search);
		const nextQuery = getQueryString(this.props.location.search);

		return prevQuery !== nextQuery ? this.fetchMovies(nextQuery) : null;
	}

	fetchMovies = (query: string): void => {
		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesByQuery(query)
			.then((movies: TMovieData[]) => this.setState({ movies }))
			.catch((errorMessage: string) => this.setState({ errorMessage }))
			.finally(() => this.setState({ isLoading: false }));
	};

	handleChangeByQuery = (query: string): void => {
		const { history, location } = this.props;

		history.push({
			pathname: location.pathname,
			search: `query=${query}`,
		});
	};

	render() {
		const { movies, errorMessage, isLoading } = this.state;

		return (
			<>
				<SearchForm onSubmit={this.handleChangeByQuery} />

				{errorMessage && <Notification message={errorMessage} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && movies.length > 0 && (
					<MoviesList {...this.props} moviesData={movies} />
				)}
			</>
		);
	}
}
