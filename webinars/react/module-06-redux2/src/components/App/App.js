//Core
import React from 'react';
//Components
import Layout from '../Layout';
import TaskList from '../TaskList';
import TaskEditor from '../TaskEditor';
import TaskFilter from '../TaskFilter';

const App = () => (
	<Layout>
		<TaskEditor />

		<TaskFilter />

		<TaskList />
	</Layout>
);

export default App;
