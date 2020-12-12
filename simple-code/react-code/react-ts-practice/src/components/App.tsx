//Core
import React from 'react';
//Components
import Title from './Title';
import Counter from './Counter';
import EventsCounter from './EventsCounter';
import Form from './Form';
import EventsForm from './EventsForm';
import Portal from './Portal';
import Context from './Context';

const App = () => {
	return (
		<>
			<Title title="test" />

			<Counter />

			<EventsCounter />

			<Form />

			<EventsForm />

			<Portal />

			<Context />
		</>
	);
};

export default App;
