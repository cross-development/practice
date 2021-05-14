const value = 50;

const add = function (num) {
	const value = 10;
	const innerValue = 5;

	return num + value + innerValue;
};

// value объявлен глобально и поэтому доступен
console.log(value); // 50

console.log(add(20)); // 35

// Ошибка, переменная innerValue не объявлена в этой области
// видимости, она доступна только внутри функции add
console.log(innerValue);
