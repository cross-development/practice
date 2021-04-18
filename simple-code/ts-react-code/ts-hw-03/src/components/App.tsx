//Core
import { Component } from 'react';
//Components
import Loader from './Loader';
import Button from './Button';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Notification from './Notification';
//Services
import { fetchImagesByQuery } from 'services/imagesApi';
//Helpers
import { TImage } from 'helpers/types';

interface IState {
	page: number;
	images: TImage[];
	errorMessage: string;
	loading: boolean;
	query: string;
}

export default class App extends Component<{}, IState> {
	state = {
		page: 1,
		images: [],
		errorMessage: '',
		loading: false,
		query: '',
	};

	componentDidUpdate(prevProps: {}, prevState: IState): void {
		const prevQuery = prevState.query;
		const nextQuery = this.state.query;

		if (prevQuery !== nextQuery) {
			this.fetchImages();
		}

		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	}

	fetchImages = (): void => {
		const { query, page } = this.state;

		this.setState({ loading: true });

		fetchImagesByQuery({ query, page })
			.then((images: TImage[]) =>
				this.setState(prevState => ({
					images: [...prevState.images, ...images],
					page: prevState.page + 1,
				})),
			)
			.catch((errorMessage: string) => this.setState({ errorMessage }))
			.finally(() => this.setState({ loading: false }));
	};

	handleFormSubmit = (query: string) =>
		this.setState({ query, page: 1, images: [] });

	render() {
		const { loading, errorMessage, images } = this.state;

		return (
			<>
				<Searchbar onSubmit={this.handleFormSubmit} />

				{errorMessage && <Notification message={errorMessage} />}

				{images.length > 0 && <ImageGallery images={images} />}

				{loading && <Loader />}

				{images.length > 0 && !loading && (
					<Button label="Load more" onLoad={this.fetchImages} />
				)}
			</>
		);
	}
}
