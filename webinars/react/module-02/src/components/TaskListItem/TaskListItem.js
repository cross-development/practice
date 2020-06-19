//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './TaskListItem.module.css';

const TaskListItem = ({ text, onRemove }) => {
	return (
		<li className={styles.taskListItem}>
			<p className={styles.taskListText}>{text}</p>

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
