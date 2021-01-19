let inputValue: string | null;
const numbers: number[] = [];
let result: number = 0;

do {
	inputValue = prompt('Введите целое число:');
	numbers.push(Number(inputValue));

	if (inputValue === null) {
		numbers.pop();
	}
} while (inputValue !== null);

if (numbers.length > 0) {
	for (let i = 0; i < numbers.length; i += 1) {
		result += numbers[i];
	}
}

console.log(`Общая сумма чисел равна: ${result}`);
