function createCounter(n) {
	let privateValue = 0;

	const increment = () => (privateValue += n);
	const decrement = () => (privateValue -= n);

	return {
		increment,
		decrement,
	};
}

const counterA = createCounter(2);

console.log(counterA.increment());
console.log(counterA.increment());

