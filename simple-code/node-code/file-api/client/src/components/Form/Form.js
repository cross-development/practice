//Core
import React from 'react';

const Form = ({ onHandleSubmit }) => {
	const handleSubmit = e => {
		e.preventDefault();

		onHandleSubmit(e.target[0].files[0]);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="file" accept="application/JSON" />
			<button type="submit">Отправить</button>
		</form>
	);
};

export default Form;
