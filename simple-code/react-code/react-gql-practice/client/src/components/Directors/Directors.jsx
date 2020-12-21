//Core
import React, { useState } from 'react';
//Components
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DirectorsTable from '../DirectorsTable/DirectorsTable';
import DirectorsForm from '../DirectorsForm/DirectorsForm';
//HOC
import withHocs from './DirectorsHoc';

const initialState = {
	open: false,
	name: '',
	age: 0,
	id: null,
	data: null,
};

const Directors = ({ classes }) => {
	const [state, setState] = useState(initialState);

	const handleClickOpen = data =>
		setState(prevState => ({ ...prevState, open: true, data }));

	const handleClose = () => setState(initialState);

	const handleChange = name => ({ target }) =>
		setState(prevState => ({ ...prevState, [name]: target.value }));

	const { name, age, id, open } = state;

	return (
		<>
			<DirectorsForm
				handleChange={handleChange}
				selectedValue={{ name, age, id }}
				open={open}
				onClose={handleClose}
			/>

			<div className={classes.wrapper}>
				<DirectorsTable onOpen={handleClickOpen} onClose={handleClose} />

				<Fab
					onClick={() => handleClickOpen(null)}
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

export default withHocs(Directors);
