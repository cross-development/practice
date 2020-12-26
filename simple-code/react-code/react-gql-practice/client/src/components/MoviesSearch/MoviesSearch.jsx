//Core
import React from 'react';
import PropTypes from 'prop-types';
//Material-ui components
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
//HOC
import withHocs from './MoviesSearchHoc';

const MoviesSearch = ({ classes, handleChange, handleSearch, name }) => (
	<div className={classes.search}>
		<div className={classes.searchIcon}>
			<SearchIcon />
		</div>

		<InputBase
			onChange={handleChange('name')}
			onKeyPress={handleSearch}
			value={name}
			placeholder="Search…"
			classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
			}}
		/>
	</div>
);

MoviesSearch.propTypes = {
	name: PropTypes.string,

	classes: PropTypes.shape({
		search: PropTypes.string.isRequired,
		searchIcon: PropTypes.string.isRequired,
		inputRoot: PropTypes.string.isRequired,
		inputInput: PropTypes.string.isRequired,
	}).isRequired,

	handleChange: PropTypes.func.isRequired,

	handleSearch: PropTypes.func.isRequired,
};

MoviesSearch.defaultProps = {
	name: '',
};

export default withHocs(MoviesSearch);
