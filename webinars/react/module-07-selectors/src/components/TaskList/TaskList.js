//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import tasksSelectors from '../../redux/tasks/tasksSelectors';
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
			completed: PropTypes.bool.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => ({
	tasks: tasksSelectors.getVisibleTasks(state),
});

export default connect(mapStateToProps)(TaskList);
