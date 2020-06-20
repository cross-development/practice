//Core
import React, { Component } from 'react';
//Components
import Layout from './Layout/Layout';
import Counter from './Counter/Counter';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import SignupForm from './SignupForm/SignupForm';
import TaskFilter from './TaskFilter/TaskFilter';
//Utils
import { uuid } from 'uuidv4';
// import createTask from '../utils/create-task';

class App extends Component {
	state = {
		tasks: [],
		filter: '',
		// firstName: 'Mango',
		// lastName: 'ZeDog',
	};

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

	// handleUpdateCompleted = taskId => {
	// 	this.setState(prevState => {
	// 		return {
	// 			tasks: prevState.tasks.map(task => {
	// 				if (task.id === taskId) {
	// 					return {
	// 						...task,
	// 						completed: !task.completed,
	// 					};
	// 				}

	// 				return task;
	// 			}),
	// 		};
	// 	});
	// };

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

		//Плохо, т.к. при фильтре перезаписывает стейт и удаляется часть массива (фильтр возвращает новый масив без "фильтруемого элемента")
		// this.setState(prevState => ({
		// 	tasks: prevState.tasks.filter(task =>
		// 		task.text.toLowerCase().includes(prevState.filter.toLowerCase()),
		// 	),
		// }));
	};

	render() {
		const { tasks, filter } = this.state;
		// const fullName = `${this.state.firstName} ${this.state.lastName}`;

		const visibleTask = this.getVisibleTasks();

		return (
			<Layout>
				<Counter initialValue={0} step={1} />

				<hr />

				{/* <h1>{fullName}</h1> */}
				<TaskEditor onAddTask={this.addTask} />
				{tasks.length > 1 && <TaskFilter value={filter} onChangeFilter={this.handleChangeFilter} />}

				{tasks.length > 0 && (
					<TaskList
						tasks={visibleTask}
						onRemoveTask={this.removeTask}
						onUpdateTask={this.handleUpdateCompleted}
					/>
				)}

				<hr />

				<SignupForm />
			</Layout>
		);
	}
}

export default App;
