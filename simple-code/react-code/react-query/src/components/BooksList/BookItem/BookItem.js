//Components
import { Loader } from 'components/Shared';
//Router
import { Link } from 'react-router-dom';
//Packages
import { useMutation, useQueryClient } from 'react-query';
//Services
import { removeBook } from 'services/api';
//Styles
import {
	Flex,
	Text,
	Button,
	Link as StyledLink,
} from 'rebass/styled-components';

const BookItem = ({ id, title, author }) => {
	const queryClient = useQueryClient();
	const { mutateAsync, isLoading } = useMutation(removeBook);

	const remove = async () => {
		await mutateAsync(id);
		queryClient.invalidateQueries('books');
	};

	return (
		<Flex p={3} width="100%" alignItems="center">
			<Link component={StyledLink} to={`/update-book/${id}`} mr="auto">
				{title}
			</Link>

			<Text>{author}</Text>

			<Button ml="5" onClick={remove}>
				{isLoading ? <Loader /> : 'Remove'}
			</Button>
		</Flex>
	);
};

export default BookItem;
