//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './TaskEditor.module.css';

class TaskEditor extends Component {
	state = {
		text: '',
	};

	handleChange = e => {
		this.setState({ text: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.onAddTask(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		const { text } = this.state;

		return (
			<form className={styles.taskEditor} onSubmit={this.handleSubmit}>
				<label className={styles.taskEditorLabel}>
					Text
					<input
						className={styles.taskEditorInput}
						type="text"
						value={text}
						onChange={this.handleChange}
					/>
				</label>

				<button className={styles.taskEditorButton} type="submit">
					Add task
				</button>
			</form>
		);
	}
}

TaskEditor.propTypes = {};

export default TaskEditor;
