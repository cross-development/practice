//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './TaskEditor.module.css';

const TaskEditor = ({ onAddTask }) => {
	return (
		<div className={styles.taskEditor}>
			<button className={styles.taskAddButton} type="button" onClick={onAddTask}>
				Add task
			</button>
		</div>
	);
};

TaskEditor.propTypes = {};

export default TaskEditor;
