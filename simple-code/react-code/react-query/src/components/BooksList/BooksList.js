//Components
import { BookItem } from './BookItem';
import { Container, LoadingFallback, ErrorFallback } from '../Shared';
//Packages
import { useQuery } from 'react-query';
//Services
import { getAllBooks } from 'services/api';
//Styles
import { Flex } from 'rebass/styled-components';

export const BooksList = () => {
	const { data, error, isLoading, isError } = useQuery('books', getAllBooks);

	if (isLoading) return <LoadingFallback />;

	if (isError) return <ErrorFallback error={error} />;

	return (
		<Container>
			<Flex flexDirection="column" alignItems="center">
				{data.map(({ id, title, author }) => (
					<BookItem key={id} id={id} title={title} author={author} />
				))}
			</Flex>
		</Container>
	);
};
