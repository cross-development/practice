const total: number = 100;
const ordered: number = 50;

const resultOfChecking: string =
	ordered <= total
		? 'Заказ оформлен, с вами свяжется менеджер'
		: 'На складе недостаточно товаров!';

console.log(resultOfChecking);
