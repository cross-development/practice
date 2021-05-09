//Settings
const BASE_URL = 'http://localhost:4000';

const createBook = async ({ ...data }) => {
	const response = await fetch(`${BASE_URL}/books/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});

	if (!response.ok) throw new Error(response.json().message);

	return response.json();
};

const getAllBooks = async () => {
	const response = await fetch(`${BASE_URL}/books`);

	if (!response.ok) throw new Error(response.json().message);

	return response.json();
};

const getBook = async ({ queryKey }) => {
	/* eslint-disable no-unused-vars */
	const [_key, { id }] = queryKey;
	const response = await fetch(`${BASE_URL}/books/${id}`);

	if (!response.ok) throw new Error(response.json().message);

	return response.json();
};

const updateBook = async ({ id, ...data }) => {
	const response = await fetch(`${BASE_URL}/books/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});

	if (!response.ok) throw new Error(response.json().message);

	return response.json();
};

const removeBook = async id => {
	const response = await fetch(`${BASE_URL}/books/${id}`, {
		method: 'DELETE',
	});

	if (!response.ok) throw new Error(response.json().message);

	return true;
};

export { createBook, getAllBooks, getBook, updateBook, removeBook };
