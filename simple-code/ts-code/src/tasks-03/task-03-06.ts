interface INewProducts {
	name: string;
	price: number;
	quantity: number;
}

const allProducts: Array<INewProducts> = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроид', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 },
];

type TCalcTotalPrice = (
	arr: Array<INewProducts>,
	productName: string,
) => number;

const calculateTotalPrice: TCalcTotalPrice = (allProducts, productName) => {
	for (const key of allProducts) {
		if (productName === key.name) {
			return key.price * key.quantity;
		}
	}
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800
