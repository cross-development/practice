//Core
import React, { useState } from 'react';
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
//HOC
import withHocs from './DirectorsTableHoc';

const initialState = {
	anchorEl: null,
	openDialog: false,
	data: {},
};

const DirectorsTable = ({ classes, onOpen, onClose, data: { directors = [] } }) => {
	const [state, setState] = useState(initialState);

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

	const { anchorEl, openDialog, data: activeElem = {} } = state;

	return (
		<>
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

export default withHocs(DirectorsTable);
