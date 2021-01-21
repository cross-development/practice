interface IEmployeesObj {
	[key: string]: number;
}

type TFindBestEmp = (obj: IEmployeesObj) => string;

const findBestEmployee: TFindBestEmp = function (employees) {
	let maxTasks: number = 0;
	let employeeName: string;

	const keys: string[] = Object.keys(employees);

	for (const key of keys) {
		if (employees[key] > maxTasks) {
			maxTasks = employees[key];
			employeeName = key;
		}
	}

	return employeeName;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
	findBestEmployee({
		ann: 29,
		david: 35,
		helen: 1,
		lorence: 99,
	}),
); // lorence

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4,
	}),
); // mango

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38,
	}),
); // lux
