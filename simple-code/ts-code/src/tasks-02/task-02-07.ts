const logins: string[] = [
	'Mango',
	'robotGoogles',
	'Poly',
	'Aj4x1sBozz',
	'qwerty123',
];

const isLoginValid = function (login: string): boolean {
	const min: number = 4;
	const max: number = 16;

	const condition: boolean = login.length >= min && login.length <= max;

	return condition ? true : false;
};

const isLoginUnique = (allLogins: string[], login: string): boolean => {
	return allLogins.indexOf(login) > -1 ? false : true;
};

const addLogin = (allLogins: string[], login: string): string => {
	const resultOfLoginValid: boolean = isLoginValid(login);
	const resultOfLoginUnique: boolean = isLoginUnique(allLogins, login);

	if (!resultOfLoginValid) {
		return 'Ошибка! Логин должен быть от 4 до 16 символов';
	}

	if (!resultOfLoginUnique) {
		return 'Такой логин уже используется!';
	}

	logins.push(login);
	return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'Ajax')); // 'Такой логин уже используется!' - проверка функций после добавления нового логина в массив
