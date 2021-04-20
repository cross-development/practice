//Default settings
const API_KEY = '9e07f05bee226a5aad11e2f836e260f9';
const baseURL = 'https://api.themoviedb.org/3';

const fetchTrendMovies = async () => {
	const response = await fetch(
		`${baseURL}/trending/all/day?api_key=${API_KEY}`,
	);

	const data = await response.json();

	return data.results;
};

const fetchMoviesByQuery = async (searchQuery: string) => {
	const response = await fetch(
		`${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
	);

	const data = await response.json();

	return data.results;
};

const fetchMoviesDetails = async (movieId: string) => {
	const response = await fetch(
		`${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
	);

	return response.ok ? response.json() : null;
};

const fetchMoviesByCast = async (movieId: string) => {
	const response = await fetch(
		`${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}`,
	);

	const data = await response.json();

	return data.cast;
};

const fetchMoviesReviews = async (movieId: string) => {
	const response = await fetch(
		`${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
	);

	const data = await response.json();

	return data.results;
};

const movieApi = {
	fetchTrendMovies,
	fetchMoviesByCast,
	fetchMoviesDetails,
	fetchMoviesByQuery,
	fetchMoviesReviews,
};

export default movieApi;
