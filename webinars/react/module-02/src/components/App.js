//Core
import React, { Component } from 'react';
//Components
import Layout from './Layout/Layout';
import Counter from './Counter/Counter';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
//Utils
import createTask from '../utils/create-task';

class App extends Component {
	state = {
		tasks: [],
	};

	addTask = () => {
		const task = createTask();

		this.setState(prevState => {
			return {
				tasks: [...prevState.tasks, task],
			};
		});
	};

	removeTask = taskId => {
		this.setState(prevState => {
			return {
				tasks: prevState.tasks.filter(({ id }) => id !== taskId),
			};
		});
	};

	render() {
		const { tasks } = this.state;

		return (
			<Layout>
				<Counter initialValue={0} step={1} />

				<hr />

				<TaskEditor onAddTask={this.addTask} />
				{tasks.length > 0 && <TaskList tasks={tasks} onRemoveTask={this.removeTask} />}
			</Layout>
		);
	}
}

export default App;
