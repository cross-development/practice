//Core
import React from 'react';
//Material-ui components
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
//Styles
import withHocs from './DirectorsSearchHoc';

const DirectorsSearch = ({ classes }) => (
	<div className={classes.search}>
		<div className={classes.searchIcon}>
			<SearchIcon />
		</div>

		<InputBase
			placeholder="Search…"
			classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
			}}
		/>
	</div>
);

export default withHocs(DirectorsSearch);
