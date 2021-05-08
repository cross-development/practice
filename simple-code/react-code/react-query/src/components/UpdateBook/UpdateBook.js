//Components
import {
	BookForm,
	Container,
	ErrorFallback,
	LoadingFallback,
} from 'components/Shared';
//Router
import { useParams, useHistory } from 'react-router-dom';
//Packages
import { useMutation, useQuery } from 'react-query';
//Services
import { getBook, updateBook } from 'services/api';
//Styles
import { Box, Heading } from 'rebass/styled-components';

const UpdateBook = () => {
	const { id } = useParams();
	const history = useHistory();

	const { data, error, isLoading, isError } = useQuery(
		['book', { id }],
		getBook,
	);

	const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

	const onFormSubmit = async data => {
		await mutateAsync({ id, ...data });
		history.push('/');
	};

	if (isLoading) return <LoadingFallback />;

	if (isError) return <ErrorFallback error={error} />;

	return (
		<Container>
			<Box sx={{ py: 3 }}>
				<Heading sx={{ marginBottom: 3 }}>Update Book</Heading>

				<BookForm
					defaultValues={data}
					isLoading={isMutating}
					onFormSubmit={onFormSubmit}
				/>
			</Box>
		</Container>
	);
};

export default UpdateBook;
