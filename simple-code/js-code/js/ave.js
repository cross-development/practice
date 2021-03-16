const SALUTATION = 'Ave';

const COLORS = [
	'black',
	'red',
	'green',
	'yellow',
	'blue',
	'magenta',
	'cyan',
	'white',
];

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;

const colorize = name => {
	let res = '';
	let color = 1;
	const letters = name.split('');

	for (const letter of letters) {
		res += colorer(letter, color++);
		if (color > COLORS.length) color = 1;
	}

	return res;
};

const greeting = name => {
	name.includes('Augustus')
		? `${SALUTATION}, ${colorize(name)}!`
		: `Hello, ${name}!`;
};

const fullName = 'Marcus Aurelius Antonius Augustus';
console.log(greeting(fullName));

const shortName = 'Marcus Aurelius';
console.log(greeting(shortName));
