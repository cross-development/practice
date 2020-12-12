const baseUrl = 'http://localhost:2000/api';

const fetchGeoCadsData = async () => {
	try {
		const response = await fetch(`${baseUrl}/geoCad`);

		const parsedResponse = await response.json();

		return parsedResponse;
	} catch (error) {
		throw error;
	}
};

const uploadDataToServer = async ({ file }) => {
	try {
		const response = await fetch(`${baseUrl}/geoCad`, {
			method: 'POST',
			body: file,
		});

		const parsedResponse = await response.json();

		return parsedResponse;
	} catch (error) {
		throw error;
	}
};

export { fetchGeoCadsData, uploadDataToServer };
