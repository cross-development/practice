//Components
import { Loader } from '../Loader';
//Packages
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
//Styles
import { Box, Button } from 'rebass/styled-components';
import { Label, Input } from '@rebass/forms/styled-components';

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
	const { control, handleSubmit } = useForm({ defaultValues });

	const onSubmit = handleSubmit(data => onFormSubmit(data));

	return (
		<form onSubmit={onSubmit}>
			<Box sx={{ marginBottom: 3 }}>
				<Label htmlFor="title">Title</Label>
				<Controller
					render={({ field }) => <Input {...field} />}
					id="title"
					type="text"
					name="title"
					defaultValue=""
					control={control}
				/>
			</Box>

			<Box sx={{ marginBottom: 3 }}>
				<Label htmlFor="author">Author</Label>
				<Controller
					render={({ field }) => <Input {...field} />}
					id="author"
					type="text"
					name="author"
					defaultValue=""
					control={control}
				/>
			</Box>

			<Button type="submit" variant="primary" mr={2}>
				{isLoading ? <Loader /> : 'Submit'}
			</Button>
		</form>
	);
};

BookForm.propTypes = {
	defaultValues: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
	}),
	isLoading: PropTypes.bool.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
};

// export default BookForm;
