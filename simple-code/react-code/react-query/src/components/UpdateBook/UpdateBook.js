//Components
import {
	BookForm,
	Container,
	ErrorFallback,
	LoadingFallback,
} from 'components/Shared';
//Router
import { useParams, useHistory } from 'react-router-dom';
//Custom Hooks
import { useFetchBook } from './useFetchBook';
import { useUpdateBook } from './useUpdateBook';
//Styles
import { Box, Heading } from 'rebass/styled-components';

export const UpdateBook = () => {
	const { id } = useParams();
	const history = useHistory();

	const { data, error, isLoading, isError } = useFetchBook(id);

	const { mutateAsync, isMutating } = useUpdateBook();

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
