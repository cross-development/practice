//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TaskListItem from '../TaskListItem/TaskListItem';
//Styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onRemoveTask }) => {
	return (
		<ul className={styles.taskList}>
			{tasks.map(({ id, text }) => (
				<TaskListItem key={id} text={text} onRemove={() => onRemoveTask(id)} />
			))}
		</ul>
	);
};

TaskList.propTypes = {};

export default TaskList;
