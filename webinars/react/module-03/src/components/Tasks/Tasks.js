//Core
import React, { Component } from 'react';
//Components
import TaskList from '../TaskList/TaskList';
import TaskEditor from '../TaskEditor/TaskEditor';
import TaskFilter from '../TaskFilter/TaskFilter';
//Utils
import { uuid } from 'uuidv4';

class Tasks extends Component {
	state = {
		tasks: [],
		filter: '',
	};

	componentDidMount() {
		console.log('Tasks componentDidMount');

		const persistedTasks = localStorage.getItem('tasks');

		if (persistedTasks) {
			this.setState({ tasks: JSON.parse(persistedTasks) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Tasks componentDidUpdate');
		// prevProps and prevState - предыдущие пропы и стейт
		// this.props and this.state - текущие (актуальные) пропы и стейт
		if (prevState.tasks !== this.state.tasks) {
			localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
		}
	}

	addTask = text => {
		const task = {
			id: uuid(),
			text,
			completed: false,
		};

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

	handleUpdateCompleted = taskId => {
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === taskId ? { ...task, completed: !task.completed } : task,
			),
		}));
	};

	handleChangeFilter = filter => {
		this.setState({ filter });
	};

	getVisibleTasks = () => {
		const { tasks, filter } = this.state;

		return tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()));
	};

	render() {
		const { tasks, filter } = this.state;

		const visibleTask = this.getVisibleTasks();

		return (
			<>
				<TaskEditor onAddTask={this.addTask} />
				{tasks.length > 1 && <TaskFilter value={filter} onChangeFilter={this.handleChangeFilter} />}

				{tasks.length > 0 && (
					<TaskList
						tasks={visibleTask}
						onRemoveTask={this.removeTask}
						onUpdateTask={this.handleUpdateCompleted}
					/>
				)}
			</>
		);
	}
}

export default Tasks;
