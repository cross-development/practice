//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
//Components
import TaskListItem from '../TaskListItem';
//Styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks }) => (
	<ul className={styles.taskList}>
		{tasks.map(({ id }) => (
			<TaskListItem key={id} id={id} />
		))}
	</ul>
);

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			// completed: PropTypes.bool.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => {
	const { items, filter } = state.tasks;
	const normalizedFilter = filter.toLowerCase();
	const visibleTasks = items.filter(({ text }) => text.toLowerCase().includes(normalizedFilter));

	return { tasks: visibleTasks };
};

export default connect(mapStateToProps)(TaskList);
