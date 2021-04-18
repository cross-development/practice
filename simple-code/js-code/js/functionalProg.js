const once = fn => {
	let done = false;

	return function () {
		return done ? undefined : ((done = true), fn.apply(this, arguments));
	};
};

const unary = fn => {
	fn.length === 1 ? fn : arg => fn(arg);
};
