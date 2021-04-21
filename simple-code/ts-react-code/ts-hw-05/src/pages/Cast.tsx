//Core
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
//Components
import Loader from 'components/Commons/Loader';
import CastList from 'components/CastList';
import Notification from 'components/Commons/Notification';
//Services
import movieApi from 'services/movieApi';
//Helpers
import { TCast } from 'helpers/types';

type TParams = { movieId: string };

interface IProps extends RouteComponentProps<TParams> {}

interface IState {
	casts: TCast[];
	errorMessage: string;
	isLoading: boolean;
}

export default class Cast extends Component<IProps, IState> {
	state = {
		casts: [],
		errorMessage: '',
		isLoading: false,
	};

	componentDidMount() {
		this.setState({ isLoading: true });

		const { match } = this.props;

		movieApi
			.fetchMoviesByCast(match.params.movieId)
			.then((casts: TCast[]) => this.setState({ casts }))
			.catch((errorMessage: string) => this.setState({ errorMessage }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { casts, errorMessage, isLoading } = this.state;

		return (
			<>
				{errorMessage && <Notification message={errorMessage} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && !errorMessage && casts.length < 1 && (
					<Notification message="We don't have any actors for this movie." />
				)}

				{casts.length > 0 && <CastList castsData={casts} />}
			</>
		);
	}
}
