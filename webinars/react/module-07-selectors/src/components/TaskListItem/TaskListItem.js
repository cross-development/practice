//Core
import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './TaskListItem.module.css';

const TaskListItem = ({ text, completed, onRemove, onToggleCompleted }) => (
	<li className={!completed ? styles.listItem : styles.completed}>
		<p className={styles.listText}>{text}</p>

		<label className={styles.listCheckboxLabel}>
			<input type="checkbox" checked={completed} onChange={onToggleCompleted} />
			Done
		</label>

		<section className={styles.listAction}>
			<button type="button" className={styles.listButton} onClick={onRemove}>
				Delete
			</button>
		</section>
	</li>
);

TaskListItem.propTypes = {
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	onRemove: PropTypes.func.isRequired,
	onToggleCompleted: PropTypes.func.isRequired,
};

export default TaskListItem;
