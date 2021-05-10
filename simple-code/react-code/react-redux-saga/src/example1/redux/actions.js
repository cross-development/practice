export const PUT_DATA = 'PUT_DATA';
export const LOAD_DATA = 'LOAD_DATA';

export const putData = dataFromServer => ({
	type: PUT_DATA,
	payload: dataFromServer,
});

export const loadData = () => ({
	type: LOAD_DATA,
});
