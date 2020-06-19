//Core
import React from 'react';
//Components
import Layout from './Layout/Layout';
import Counter from './Counter';

const App = () => {
	return (
		<Layout>
			<Counter initialValue={0} step={1} />
		</Layout>
	);
};

export default App;
