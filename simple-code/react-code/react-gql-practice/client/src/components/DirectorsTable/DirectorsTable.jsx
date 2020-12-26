//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Material-ui components
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
//Custom components
import DirectorsDialog from '../DirectorsDialog/DirectorsDialog';
import DirectorsSearch from '../DirectorsSearch/DirectorsSearch';
//HOC
import withHocs from './DirectorsTableHoc';

const initialState = {
	anchorEl: null,
	openDialog: false,
	name: '',
};

const DirectorsTable = ({ classes, onOpen, data }) => {
	const [state, setState] = useState(initialState);

	const { directors = [], fetchMore } = data;

	const handleChange = name => event =>
		setState(prevState => ({ ...prevState, [name]: event.target.value }));

	const handleSearch = e => {
		if (e.charCode === 13) {
			fetchMore({
				variables: { name: state.name },
				updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
			});
		}
	};

	const handleDialogOpen = () =>
		setState(prevState => ({ ...prevState, openDialog: true }));

	const handleDialogClose = () =>
		setState(prevState => ({ ...prevState, openDialog: false }));

	const handleClick = ({ currentTarget }, data) =>
		setState(prevState => ({ ...prevState, anchorEl: currentTarget, data }));

	const handleClose = () =>
		setState(prevState => ({ ...prevState, anchorEl: null }));

	const handleEdit = row => {
		onOpen(state.data);
		handleClose();
	};

	const handleDelete = () => {
		handleDialogOpen();
		handleClose();
	};

	const { anchorEl, openDialog, data: activeElem = {}, name } = state;

	return (
		<>
			<Paper>
				<DirectorsSearch
					name={name}
					handleChange={handleChange}
					handleSearch={handleSearch}
				/>
			</Paper>

			<DirectorsDialog
				open={openDialog}
				handleClose={handleDialogClose}
				id={activeElem.id}
			/>
			<Paper className={classes.root}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Age</TableCell>
							<TableCell>Movies</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{directors.map(director => (
							<TableRow key={director.id}>
								<TableCell component="th" scope="row">
									{director.name}
								</TableCell>

								<TableCell align="right">{director.age}</TableCell>

								<TableCell>
									{director.movies.map((movie, key) => (
										<div key={movie.name}>
											{`${key + 1}. `}
											{movie.name}
										</div>
									))}
								</TableCell>

								<TableCell align="right">
									<>
										<IconButton
											color="inherit"
											onClick={e => handleClick(e, director)}
										>
											<MoreIcon />
										</IconButton>

										<Menu
											id="simple-menu"
											anchorEl={anchorEl}
											open={Boolean(anchorEl)}
											onClose={handleClose}
										>
											<MenuItem onClick={() => handleEdit(director)}>
												<CreateIcon /> Edit
											</MenuItem>

											<MenuItem onClick={handleDelete}>
												<DeleteIcon /> Delete
											</MenuItem>
										</Menu>
									</>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		</>
	);
};

DirectorsTable.propsTypes = {
	classes: PropTypes.shape({
		root: PropTypes.string.isRequired,
		searchRoot: PropTypes.string.isRequired,
	}).isRequired,

	onOpen: PropTypes.bool.isRequired,

	data: PropTypes.shape({
		directors: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				age: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				movies: PropTypes.arrayOf(
					PropTypes.shape({
						id: PropTypes.string.isRequired,
						name: PropTypes.string.isRequired,
					}).isRequired,
				).isRequired,
			}).isRequired,
		),

		fetchMore: PropTypes.func.isRequired,
	}).isRequired,
};

DirectorsTable.defaultProps = {
	directors: [],
};

export default withHocs(DirectorsTable);
