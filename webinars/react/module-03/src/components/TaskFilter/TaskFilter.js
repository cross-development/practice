//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './TaskFilter.module.css';

function TaskFilter({ value, onChangeFilter }) {
	return (
		<div>
			<input
				className={styles.taskEditorInput}
				type="text"
				value={value}
				onChange={e => onChangeFilter(e.target.value)}
			/>
		</div>
	);
}

export default TaskFilter;
