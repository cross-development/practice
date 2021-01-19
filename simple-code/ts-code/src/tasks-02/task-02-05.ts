const checkForSpam = function (message: string): boolean {
	const words: string[] = message.split(' ');
	const forbiddenWords: ['spam', 'sale'] = ['spam', 'sale'];

	for (let word of words) {
		word = word.toLowerCase();

		for (const forbidden of forbiddenWords) {
			if (word.indexOf(forbidden) > -1) {
				return true;
			}
		}
	}

	return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
