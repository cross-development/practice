//Core
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
//Components
import Loader from 'components/Commons/Loader';
import ReviewsList from 'components/ReviewsList';
import Notification from 'components/Commons/Notification';
//Services
import movieApi from 'services/movieApi';
//Helpers
import { TReview } from 'helpers/types';

type TParams = { movieId: string };

interface IProps extends RouteComponentProps<TParams> {}

interface IState {
	reviews: TReview[];
	errorMessage: string;
	isLoading: boolean;
}
export default class Reviews extends Component<IProps, IState> {
	state = {
		reviews: [],
		errorMessage: '',
		isLoading: false,
	};

	componentDidMount() {
		const { match } = this.props;

		this.setState({ isLoading: true });

		movieApi
			.fetchMoviesReviews(match.params.movieId)
			.then((reviews: TReview[]) => this.setState({ reviews }))
			.catch((errorMessage: string) => this.setState({ errorMessage }))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { reviews, errorMessage, isLoading } = this.state;

		return (
			<>
				{errorMessage && <Notification message={errorMessage} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && !errorMessage && reviews.length < 1 && (
					<Notification message="We don't have any reviews for this movie." />
				)}

				{reviews.length > 0 && <ReviewsList reviewsData={reviews} />}
			</>
		);
	}
}
