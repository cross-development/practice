//Packages
import { useQuery } from 'react-query';
//Services
import { getBook } from 'services/api';

export const useFetchBook = id => {
	const { data, error, isLoading, isError } = useQuery(
		['book', { id }],
		getBook,
	);

	return { data, error, isLoading, isError };
};
