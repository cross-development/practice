//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TaskListItem from '../TaskListItem/TaskListItem';
//Styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => {
	return (
		<ul className={styles.taskList}>
			{tasks.map(({ id, text, completed }) => (
				<TaskListItem
					key={id}
					text={text}
					completed={completed}
					onRemove={() => onRemoveTask(id)}
					onUpdate={() => onUpdateTask(id)}
				/>
			))}
		</ul>
	);
};

TaskList.propTypes = {};

export default TaskList;
