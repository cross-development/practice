//Promise
const makeSimplePromise = (text, delay) => {
	console.log('Выполнится 1-м внутри функции');

	return new Promise(resolve => {
		console.log('Выполнится 2-м внутри Promise');

		setTimeout(() => {
			console.log('Выполнится 4-м внутри setTimeout перед методом resolve');
			resolve(text);

			console.log('Выполнится 5-м внутри setTimeout после метода resolve');
		}, delay);

		console.log('Выполнится 3-м внутри Promise');
	});
};

const simplePromiseA = makePromise('simplePromiseA', 1000);

simplePromiseA
	.then(result => {
		console.log('Выполнится 6-м в then после 3х секунд, но перед результатом');

		console.log('Выполнится 7-м и выведет результат:', result);

		console.log('Выполнится 8-м в then после 3х секунд, но после результата');
	})
	.catch(err => {
		console.log('Выполнится в catch в случае получения ошибки');

		console.log(err);
	});

//Promise.all()
const makePromiseAll = (text, delay) => {
	console.log('Выполнится 1-м внутри функции');

	return new Promise(resolve => {
		console.log('Выполнится 2-м внутри Promise');

		setTimeout(() => {
			console.log('Выполнится 4-м внутри setTimeout перед методом resolve');
			resolve(text);

			console.log('Выполнится 5-м внутри setTimeout после метода resolve');
		}, delay);

		console.log('Выполнится 3-м внутри Promise');
	});
};

const makePromiseAllA = makePromise('makePromiseAllA', 1000);
const makePromiseAllB = makePromise('makePromiseAllB', 3000);

Promise.all([makePromiseAllA, makePromiseAllB])
	.then(result => {
		console.log('Выполнится 6-м в then после 1й секунды, но перед результатом');

		console.log('Выполнится 7-м и выведет результат', result);

		console.log('Выполнится 8-м в then после 1й секунды, но после результата');
	})
	.catch(err => {
		console.log('Выполнится в catch в случае получения ошибки');

		console.log(err);
	});
