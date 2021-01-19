let credits: number = 23580;
const pricePerDroid: number = 3000;

let quantityOfDroid: string | null;
quantityOfDroid = prompt('Количество дроидов которые Вы хотите купить?');

let totalPrice: number;

if (quantityOfDroid === null) {
	console.log('Отменено пользователем!');
} else {
	totalPrice = Number(quantityOfDroid) * pricePerDroid;

	if (totalPrice > credits) {
		console.log('Недостаточно средств на счету!');
	} else {
		credits -= totalPrice;
		console.log(
			`Вы купили ${quantityOfDroid} дроидов, на счету осталось ${credits} кредитов.`,
		);
	}
}
