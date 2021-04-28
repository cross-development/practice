const once = fn => {
	let done = false;

	return function () {
		return done ? undefined : ((done = true), fn.apply(this, arguments));
	};
};

const unary = fn => {
	fn.length === 1 ? fn : arg => fn(arg);
};

const curry = fn => {
	if (typeof fn !== 'function') {
		throw Error('No function provided');
	}

	return function curriedFn(...args) {
		return fn.apply(null, args);
	};
};

const multiply = (x, y, z) => x * y * z;

curry(multiply)(1, 2, 3); // 6

curry(multiply)(1, 2, 0); // 0
