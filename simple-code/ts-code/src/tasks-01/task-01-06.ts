let input: string | null;
let totalValue: number = 0;

do {
	input = prompt('Введите целое число:');
	//проверка действия пользователя на ввод строки / нажания "ОК" / пробелов
	if (input.trim() === '') {
		alert('Было введено не число, попробуйте еще раз!');
	} else {
		totalValue += Number(input);
	}
} while (input !== null);

alert(`Общая сумма чисел равна: ${totalValue}`);
