//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './TaskListItem.module.css';

const TaskListItem = ({ text, completed, onRemove, onUpdate }) => {
	return (
		<li className={!completed ? styles.taskListItem : styles.completed}>
			<p className={styles.taskListText}>{text}</p>
			<label className={styles.taskListCheckboxLabel}>
				<input type="checkbox" checked={completed} onChange={onUpdate} />
				Done
			</label>
			<section className={styles.taskListAction}>
				<button type="button" className={styles.taskListButton} onClick={onRemove}>
					Delete
				</button>
			</section>
		</li>
	);
};

TaskListItem.propTypes = {};

export default TaskListItem;
