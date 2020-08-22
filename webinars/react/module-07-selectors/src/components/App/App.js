//Core
import React from 'react';
//Components
import Layout from '../Layout';
import TaskList from '../TaskList';
import TaskEditor from '../TaskEditor';
import TaskFilter from '../TaskFilter';

const App = ({ onIncrement, counterValue, isLoadingTasks }) => (
	<Layout>
		<button type="button" onClick={() => onIncrement()}>
			Counter value: {counterValue}{' '}
		</button>
		<hr />
		{isLoadingTasks && <h1>Loading Stuff...</h1>}
		<TaskEditor />

		<TaskFilter />

		<TaskList />
	</Layout>
);

export default App;
