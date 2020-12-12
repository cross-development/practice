//Core
import React, { useState, useEffect } from 'react';
//Components
import Form from '../Form';
import Loader from '../Loader';
import GeoCadsList from '../GeoCadsList';
//Services
import { fetchGeoCadsData, uploadDataToServer } from '../../services/geoCadAPI';

const App = () => {
	const [geoCads, setGeoCads] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetchGeoCadsData()
			.then(setGeoCads)
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	const handleSubmit = file => {
		setLoading(true);

		uploadDataToServer({ file })
			.then(data => setGeoCads(prevState => [...prevState, ...data]))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	};

	return (
		<>
			<Form onHandleSubmit={handleSubmit} />

			{loading && <Loader onLoad={loading} />}

			{geoCads.length > 0 && <GeoCadsList geoCads={geoCads} />}
		</>
	);
};

export default App;
