const bind = (cb, ctx) => (...args) => cb.apply(ctx, args);

function fn() {
	console.log(arguments, this);
}

const magicFn = bind(fn, { a: 1 });

magicFn(2, 3, 4);
