//Components
import { BookForm, Container } from '../Shared';
//Router
import { useHistory } from 'react-router-dom';
//Packages
import { useMutation } from 'react-query';
//Services
import { createBook } from 'services/api';
//Styles
import { Box, Heading } from 'rebass/styled-components';

const CreateBook = () => {
	const history = useHistory();

	const { mutateAsync, isLoading } = useMutation(createBook);

	const onSubmit = async data => {
		await mutateAsync(data);
		history.push('/');
	};

	return (
		<Container>
			<Box sx={{ py: 3 }}>
				<Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
				<BookForm onFormSubmit={onSubmit} isLoading={isLoading} />
			</Box>
		</Container>
	);
};

export default CreateBook;
