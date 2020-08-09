//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import tasksAction from '../../redux/tasks/tasksActions';
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

const mapStateToProps = (state, ownProps) => {
	const item = state.tasks.items.find(item => item.id === ownProps.id);

	return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onRemove: () => dispatch(tasksAction.removeTask(ownProps.id)),
	onToggleCompleted: () => dispatch(tasksAction.toggleCompleted(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);
