//Components
import { Loader } from 'components/Shared';
//Router
import { Link } from 'react-router-dom';
//Packages
import PropTypes from 'prop-types';
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

export const BookItem = ({ id, title, author }) => {
	const queryClient = useQueryClient();

	const { mutateAsync, isLoading } = useMutation(removeBook);

	const remove = async () => {
		await mutateAsync(id);
		queryClient.invalidateQueries('books');
	};

	return (
		<Flex key={id} p={3} width="100%" alignItems="center">
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

BookItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};
