//Core
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import tasksOperations from '../../redux/tasks/tasksOperations';
//Styles
import styles from './TaskEditor.module.css';

class TaskEditor extends Component {
	state = {
		text: '',
	};

	handleChange = e => this.setState({ text: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onAddTask(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		const { text } = this.state;

		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				<label className={styles.label}>
					Text
					<input className={styles.input} type="text" value={text} onChange={this.handleChange} />
				</label>

				<button className={styles.button} type="submit">
					Add task
				</button>
			</form>
		);
	}
}

const mapDispatchToProps = {
	onAddTask: tasksOperations.addTask,
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onAddTask: text => dispatch(tasksActions.addTask(text)),
// 	};
// };

export default connect(null, mapDispatchToProps)(TaskEditor);
