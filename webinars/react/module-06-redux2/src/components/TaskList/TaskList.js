//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import tasksAction from '../../redux/tasks/tasksActions';
//Components
import TaskListItem from '../TaskListItem';
//Styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onRemoveTask, onToggleCompleted }) => (
	<ul className={styles.taskList}>
		{tasks.map(({ id, text, completed }) => (
			<TaskListItem
				key={id}
				text={text}
				completed={completed}
				onRemove={() => onRemoveTask(id)}
				onUpdate={() => onToggleCompleted(id)}
			/>
		))}
	</ul>
);

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = state => {
	const { items, filter } = state.tasks;
	const normalizedFilter = filter.toLowerCase();

	return {
		tasks: items.filter(({ text }) => text.toLowerCase().includes(normalizedFilter)),
	};
};

const mapDispatchToProps = {
	onRemoveTask: tasksAction.removeTask,
	onToggleCompleted: tasksAction.toggleCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
