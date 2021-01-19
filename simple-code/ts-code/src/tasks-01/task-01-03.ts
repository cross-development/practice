const ADMIN_PASSWORD: string = 'jqueryismyjam';

let message: string | null = prompt('Введите пароль:');

if (message === null) {
	message = 'Отменено пользователем!';
} else if (message === ADMIN_PASSWORD) {
	message = 'Добро пожаловать!';
} else {
	message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
