//Utils
import axios from 'axios';

const fetchArticlesWithQuery = (searchQuery, page = 0) => {
	return axios
		.get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`)
		.then(response => response.data.hits);
};

export default {
	fetchArticlesWithQuery,
};
