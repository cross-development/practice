//Core
import React, { useState } from 'react';
//Material-ui components
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
//Custom components
import MoviesDialog from '../MoviesDialog/MoviesDialog';
import MoviesSearch from '../MoviesSearch/MoviesSearch';
//HOC
import withHocs from './MoviesTableHoc';

const initialState = {
	anchorEl: null,
	openDialog: false,
	name: '',
};

const MoviesTable = ({ classes, onOpen, onClose, data }) => {
	const [state, setState] = useState(initialState);

	const { movies = [], fetchMore } = data;

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

	const handleEdit = () => {
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
				<MoviesSearch
					name={name}
					handleChange={handleChange}
					handleSearch={handleSearch}
				/>
			</Paper>

			<MoviesDialog
				open={openDialog}
				handleClose={handleDialogClose}
				id={activeElem.id}
			/>
			<Paper className={classes.root}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Genre</TableCell>
							<TableCell align="right">Rate</TableCell>
							<TableCell>Director</TableCell>
							<TableCell>Watched</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{movies.map(movie => (
							<TableRow key={movie.id}>
								<TableCell component="th" scope="row">
									{movie.name}
								</TableCell>

								<TableCell>{movie.genre}</TableCell>

								<TableCell align="right">{movie.rate}</TableCell>

								<TableCell>{movie.director.name}</TableCell>

								<TableCell>
									<Checkbox checked={movie.watched} disabled />
								</TableCell>

								<TableCell align="right">
									<>
										<IconButton
											color="inherit"
											onClick={e => handleClick(e, movie)}
										>
											<MoreIcon />
										</IconButton>

										<Menu
											id="simple-menu"
											anchorEl={anchorEl}
											open={Boolean(anchorEl)}
											onClose={handleClose}
										>
											<MenuItem onClick={handleEdit}>
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

export default withHocs(MoviesTable);
