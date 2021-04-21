//Core
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
//Components
import Loader from 'components/Commons/Loader';
import NotFound from 'components/Commons/NotFound';
import Notification from 'components/Commons/Notification';
import ButtonGoBack from 'components/ButtonGoBack';
import MovieDetails from 'components/MovieDetails';
import AdditionInfo from 'components/AdditionInfo';
//Routes
import routes from 'router';
//Services
import movieApi from 'services/movieApi';
//Helpers
import { TMovieDetails } from 'helpers/types';

type TParams = { movieId: string };
type TLocation = { from: string };

interface IProps extends RouteComponentProps<TParams, {}, TLocation | null> {}

interface IState {
	movie: TMovieDetails;
	errorMessage: string;
	isLoading: boolean;
}

export default class MovieDetailsPage extends Component<IProps, IState> {
	state = {
		movie: null,
		errorMessage: '',
		isLoading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesDetails(match.params.movieId)
			.then((movie: TMovieDetails) => this.setState({ movie }))
			.catch((errorMessage: string) => this.setState({ errorMessage }))
			.finally(() => this.setState({ isLoading: false }));
	}

	handleGoBack = () => {
		const { location, history } = this.props;

		return location.state && location.state.from
			? history.push(location.state.from)
			: history.push(routes.home);
	};

	render() {
		const { movie, errorMessage, isLoading } = this.state;

		return (
			<>
				{errorMessage && <Notification message={errorMessage} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{movie === null && <NotFound />}

				{!isLoading && movie && (
					<>
						<ButtonGoBack onChangeClick={this.handleGoBack} />

						<MovieDetails movieData={movie} />

						<AdditionInfo {...this.props} isLoading={isLoading} />
					</>
				)}
			</>
		);
	}
}
