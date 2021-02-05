{
	type TProducts = {
		name: string;
		price: number;
		quantity: number;
		[index: string]: number | string;
	};

	const products: Array<TProducts> = [
		{ name: 'Радар', price: 1300, quantity: 4 },
		{ name: 'Сканер', price: 2700, quantity: 3 },
		{ name: 'Дроид', price: 400, quantity: 7 },
		{ name: 'Захват', price: 1200, quantity: 2 },
	];

	type TGetAllProp = (
		arr: Array<TProducts>,
		prop: string,
	) => (number | string)[];

	const getAllPropValues: TGetAllProp = function (arr, prop) {
		const values = [];

		for (const key of arr) {
			if (prop in key) {
				values.push(key[prop]);
			}
		}

		return values;
	};

	/*
	 * Вызовы функции для проверки работоспособности твоей реализации.
	 */
	console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
	console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
	console.log(getAllPropValues(products, 'category')); // []
}
