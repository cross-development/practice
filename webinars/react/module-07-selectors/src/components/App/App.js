//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import Layout from '../Layout';
import TaskList from '../TaskList';
import TaskEditor from '../TaskEditor';
import TaskFilter from '../TaskFilter';
//Redux
import tasksOperations from '../../redux/tasks/tasksOperations';

class App extends Component {
	componentDidMount() {
		this.props.onFetchTasks();
	}

	render() {
		return (
			<Layout>
				{this.props.isLoadingTasks && <h1>Loading Stuff...</h1>}
				<TaskEditor />

				<TaskFilter />

				<TaskList />
			</Layout>
		);
	}
}

const mapStateToProps = state => ({
	isLoadingTasks: state.tasks.loading,
});

const mapDispatchToProps = {
	onFetchTasks: tasksOperations.fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
