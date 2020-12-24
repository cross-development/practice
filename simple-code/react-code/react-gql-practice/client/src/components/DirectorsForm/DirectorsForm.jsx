//Core
import React from 'react';
//Material-ui components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';
//HOC
import withHocs from './DirectorsFormHoc';

const DirectorsForm = props => {
	const { selectedValue = {}, onClose, classes, open, handleChange } = props;
	const { addDirector, updateDirector } = props;
	const { id, name, age } = selectedValue;

	const handleClose = () => onClose();

	const handleSave = () => {
		id
			? updateDirector({ id, name, age: Number(age) })
			: addDirector({ name, age: Number(age) });

		onClose();
	};

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			aria-labelledby="simple-dialog-title"
		>
			<DialogTitle className={classes.title} id="simple-dialog-title">
				Director information
			</DialogTitle>

			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					id="outlined-name"
					label="Name"
					className={classes.textField}
					value={name}
					onChange={handleChange('name')}
					margin="normal"
					variant="outlined"
				/>

				<TextField
					id="outlined-rate"
					label="Age"
					className={classes.textField}
					value={age}
					onChange={handleChange('age')}
					type="number"
					margin="normal"
					variant="outlined"
				/>

				<div className={classes.wrapper}>
					<Button
						onClick={handleSave}
						variant="contained"
						color="primary"
						className={classes.button}
					>
						<SaveIcon /> Save
					</Button>
				</div>
			</form>
		</Dialog>
	);
};

export default withHocs(DirectorsForm);
