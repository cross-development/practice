function example1() {
	/*
    Global env
    Record: {}
    Parent: null
*/

	const asd = 1;
	/*
    Global env
    Record: {asd: 1}
    Parent: null
*/

	// [[Environment]]: Global env
	function fn1(a) {
		/*
    Fn1 env
    Record: {a: 1}
    Parent: Global env
    */
		console.log('fn1 a', a); //1

		const b = 5;
		/*
    Fn1 env
    Record: {a: 1, b: 5}
    Parent: Global env
    */

		let c = b + a; // 6
		/*
    Fn1 env
    Record: {a: 1, b: 5, c: 6}
    Parent: Global env
    */

		//[[Environment]]: Fn1 env
		function fn2(d) {
			/*
        Fn2 env
        Record: {d: 6}
        Parent: Fn1 env
        */
			console.log('fn2 d', d); //6

			let f = d + 6;
			/*
        Fn2 env
        Record: {d: 6, f: 12}
        Parent: Fn1 env
        */

			return f;
		}
		/*
    Fn1 env
    Record: {a: 1, b: 5, c: 6, fn2: f}
    Parent: Global env
    */

		//[[Environment]]: Fn1 env
		function fn3() {
			/*
        Fn3 env
        Record: {}
        Parent: Fn1 env
        */
			console.log('fn3 b', b); //5
			console.log('fn3 c', c); //6

			const g = fn2(c);
			/*
        Fn3 env
        Record: {g: 12}
        Parent: Fn1 env
        */

			console.log('fn3 g', g); //12
		}
		/*
    Fn1 env
    Record: {a: 1, b: 5, c: 6, fn2: f, fn3: f}
    Parent: Global env
    */

		fn3();
	}
	/*
    Global env
    Record: {asd: 1, fn1: f}
    Parent: null
*/

	fn1(asd);

	// console.log('fn1 a', a); //1
	// console.log('fn3 b', b); //5
	// console.log('fn3 c', c); //6
	// console.log('fn2 d', d); //6
	// console.log('fn3 g', g); //12
}

function example2() {
	/**
	 * Global env
	 * Record: {}
	 * Parent: null
	 */

	//[[Environment]]: Global env
	function test() {
		/**
		 * Test env
		 * Record: {}
		 * Parent: Global env
		 */
		let num1 = 1;
		/**
		 * Test env
		 * Record: {num1: 1}
		 * Parent: Global env
		 */

		let num2 = 2;
		/**
		 * Test env
		 * Record: {num1: 1, num2: 2}
		 * Parent: Global env
		 */

		//[[Environment]]: Test env
		return function () {
			/**
			 * anonymous env
			 * Record: {}
			 * Parent: Test env
			 */
			return num1 + num2; //1 + 2 = 3
		};
	}
	/**
	 * Global env
	 * Record: {test: function}
	 * Parent: null
	 */

	let func = test();
	/**
	 * Global env
	 * Record: {test: function, func: function}
	 * Parent: null
	 */

	alert(func()); // 3
}

function example3() {
	/**
	 * Global env
	 * Record: {}
	 * Parent: null
	 */

	//[[Environment]]: Global env
	function test() {
		/**
		 * Test env
		 * Record: {}
		 * Parent: Global env
		 */
		let num1 = 1;
		/**
		 * Test env
		 * Record: {num1: 1}
		 * Parent: Global env
		 */

		//[[Environment]]: Test env
		return function () {
			/**
			 * Anonymous env
			 * Record: {}
			 * Parent: Test env
			 */
			return num1 + num2; // 1 + 2 = 3
		};
	}
	/**
	 * Global env
	 * Record: {test: f}
	 * Parent: null
	 */

	let num2 = 2;
	/**
	 * Global env
	 * Record: {test: f, num2: 2}
	 * Parent: null
	 */

	let func = test();
	/**
	 * Global env
	 * Record: {test: f, num2: 2, func: f}
	 * Parent: null
	 */

	alert(func()); // 3
}

function example4() {
	/**
	 * Global env
	 * Record: {}
	 * Parent: null
	 */

	//[[Environment]]: Global env
	function test() {
		/**
		 * Test env
		 * Record: {}
		 * Parent: Global env
		 */
		let num = 1;
		/**
		 * Test env
		 * Record: {num: 1}
		 * Parent: Global env
		 */

		//[[Environment]]: Test env
		return function () {
			/**
			 * Anonymous env
			 * Record: {}
			 * Parent: Test env
			 */
			return num; //1
		};
	}
	/**
	 * Global env
	 * Record: {test: f}
	 * Parent: null
	 */

	let num = 2;
	/**
	 * Global env
	 * Record: {test: f, num: 2}
	 * Parent: null
	 */

	let func = test();
	/**
	 * Global env
	 * Record: {test: f, num: 2, func: f}
	 * Parent: null
	 */

	alert(func()); // 1
}
