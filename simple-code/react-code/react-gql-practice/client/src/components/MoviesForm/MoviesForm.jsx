//Core
import React from 'react';
import PropTypes from 'prop-types';
//Material-ui components
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';
//HOC
import withHocs from './MoviesFormHoc';

const MoviesForm = props => {
	const { handleChange, handleSelectChange, handleCheckboxChange } = props;
	const { classes, open, onClose, selectedValue = {} } = props;
	const { data = {}, addMovie, updateMovie } = props;

	const { id, name, genre, rate, directorId, watched } = selectedValue;
	const { directors = [] } = data;

	const handleClose = () => onClose();

	const handleSave = () => {
		const movie = {
			name,
			genre,
			directorId,
			rate: Number(rate),
			watched: Boolean(watched),
		};

		id ? updateMovie({ id, ...movie }) : addMovie({ ...movie });

		onClose();
	};

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			aria-labelledby="simple-dialog-title"
		>
			<DialogTitle className={classes.title} id="simple-dialog-title">
				Movie information
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
					id="outlined-genre"
					label="Genre"
					className={classes.textField}
					value={genre}
					onChange={handleChange('genre')}
					margin="normal"
					variant="outlined"
				/>

				<TextField
					id="outlined-rate"
					label="Rate"
					value={rate}
					onChange={handleChange('rate')}
					type="number"
					className={classes.textField}
					margin="normal"
					variant="outlined"
				/>

				<FormControl variant="outlined" className={classes.formControlSelect}>
					<InputLabel htmlFor="outlined-age-simple">Director</InputLabel>

					<Select
						onChange={handleSelectChange}
						value={directorId}
						input={
							<OutlinedInput
								name="directorId"
								id="outlined-director"
								labelWidth={57}
							/>
						}
					>
						{directors.map(({ id, name }) => (
							<MenuItem key={id} value={id}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<div className={classes.wrapper}>
					<FormControlLabel
						label="Watched movie"
						control={
							<Checkbox
								value="watched"
								checked={watched}
								onChange={handleCheckboxChange('watched')}
							/>
						}
					/>

					<Button
						color="primary"
						variant="contained"
						onClick={handleSave}
						className={classes.button}
					>
						<SaveIcon /> Save
					</Button>
				</div>
			</form>
		</Dialog>
	);
};

MoviesForm.propTypes = {
	onClose: PropTypes.func.isRequired,
	addMovie: PropTypes.func.isRequired,
	updateMovie: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSelectChange: PropTypes.func.isRequired,
	handleCheckboxChange: PropTypes.func.isRequired,

	classes: PropTypes.shape({
		title: PropTypes.string.isRequired,
		button: PropTypes.string.isRequired,
		wrapper: PropTypes.string.isRequired,
		container: PropTypes.string.isRequired,
		textField: PropTypes.string.isRequired,
		formControl: PropTypes.string.isRequired,
		formControlSelect: PropTypes.string.isRequired,
	}).isRequired,

	open: PropTypes.bool.isRequired,

	selectedValue: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string.isRequired,
		genre: PropTypes.string.isRequired,
		watched: PropTypes.bool.isRequired,
		directorId: PropTypes.string.isRequired,
		rate: PropTypes.oneOfType([
			PropTypes.string.isRequired,
			PropTypes.number.isRequired,
		]).isRequired,
	}).isRequired,

	data: PropTypes.shape({
		directors: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
			}).isRequired,
		),
	}),
};

MoviesForm.defaultProps = {
	selectedValue: {},
	id: '',
	data: {},
	directors: [],
};

export default withHocs(MoviesForm);
