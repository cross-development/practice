//Helpers
import { TImage } from 'helpers/types';

//Core
const API_KEY = '16822291-3bd987bc1a9b2ff27c6ed5ac6';
const BASE_URL = 'https://pixabay.com/api';
const BASE_PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';

interface IProps {
	query: string;
	page?: number | 1;
}

const fetchImagesByQuery = async ({ query, page }: IProps): Promise<any> => {
	try {
		const response = await fetch(
			`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&${BASE_PARAMS}`,
		);

		const results = await response.json();

		return results.hits.map(
			({ id, webformatURL, largeImageURL, tags }: TImage) => ({
				id,
				webformatURL,
				largeImageURL,
				tags,
			}),
		);
	} catch (error) {
		throw error.message;
	}
};

export { fetchImagesByQuery };
