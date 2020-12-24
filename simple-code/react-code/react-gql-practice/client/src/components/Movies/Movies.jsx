//Core
import React, { useState } from 'react';
//Material-ui components
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//Custom components
import MoviesTable from '../MoviesTable/MoviesTable';
import MoviesForm from '../MoviesForm/MoviesForm';
//HOC
import withHocs from './MoviesHoc';

const initialState = {
	open: false,
	name: '',
	genre: '',
	watched: false,
	rate: 0,
	directorId: '',
};

const Movies = ({ classes }) => {
	const [state, setState] = useState(initialState);

	const handleClickOpen = (data = {}) =>
		setState(prevState => ({
			...prevState,
			open: true,
			...data,
			directorId: data.director ? data.director.id : '',
		}));

	const handleClose = () => setState(initialState);

	const handleSelectChange = ({ target }) =>
		setState(prevState => ({ ...prevState, [target.name]: target.value }));

	const handleCheckboxChange = name => ({ target }) =>
		setState(prevState => ({ ...prevState, [name]: target.checked }));

	const handleChange = name => ({ target }) =>
		setState(prevState => ({ ...prevState, [name]: target.value }));

	const { id, name, genre, watched, rate, directorId, open } = state;

	return (
		<>
			<MoviesForm
				open={open}
				onClose={handleClose}
				handleChange={handleChange}
				handleSelectChange={handleSelectChange}
				handleCheckboxChange={handleCheckboxChange}
				selectedValue={{ id, name, genre, watched, rate, directorId }}
			/>

			<div className={classes.wrapper}>
				<MoviesTable onOpen={handleClickOpen} onClose={handleClose} />

				<Fab
					onClick={handleClickOpen}
					color="primary"
					aria-label="Add"
					className={classes.fab}
				>
					<AddIcon />
				</Fab>
			</div>
		</>
	);
};

export default withHocs(Movies);
