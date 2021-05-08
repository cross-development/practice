//Components
import Loader from '../Loader';
//Packages
import { useForm } from 'react-hook-form';
//Styles
import { Label, Input } from '@rebass/forms';
import { Box, Button } from 'rebass/styled-components';

const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
	const { register, handleSubmit } = useForm({ defaultValues });

	const onSubmit = handleSubmit(data => onFormSubmit(data));

	return (
		<form onSubmit={onSubmit}>
			<Box sx={{ marginBottom: 3 }}>
				<Label htmlFor="title">Title</Label>
				<Input ref={register} id="title" name="title" type="text" />
			</Box>

			<Box sx={{ marginBottom: 3 }}>
				<Label htmlFor="author">Author</Label>
				<Input ref={register} id="author" name="author" type="text" />
			</Box>

			<Button>{isLoading ? <Loader /> : 'Submit'}</Button>
		</form>
	);
};

export default BookForm;
