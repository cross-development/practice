//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import contactsActions from 'redux/contacts/contactsActions';
//Styles
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
	<div className={styles.filterWrapper}>
		<label>
			Find contacts by name
			<input
				className={styles.input}
				type="text"
				autoComplete="off"
				value={value}
				onChange={e => onChangeFilter(e.target.value)}
			/>
		</label>
	</div>
);

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
	onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
