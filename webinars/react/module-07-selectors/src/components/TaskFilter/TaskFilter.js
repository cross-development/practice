//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import tasksActions from '../../redux/tasks/tasksActions';
import tasksSelectors from '../../redux/tasks/tasksSelectors';
//Styles
import styles from './TaskFilter.module.css';

const TaskFilter = ({ value, onChangeFilter }) => (
	<div>
		<input
			className={styles.taskEditorInput}
			type="text"
			value={value}
			onChange={e => onChangeFilter(e.target.value)}
		/>
	</div>
);

const mapStateToProps = state => ({
	value: tasksSelectors.getFilter(state),
});

const mapDispatchToProps = {
	onChangeFilter: tasksActions.changeFilter,
};

TaskFilter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);
