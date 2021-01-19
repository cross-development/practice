// ============================================================================================
// Interfaces - simple examples
// ============================================================================================

// One way
function printLabel(labeledObj: { label: string }): void {
	console.log(labeledObj.label);
}

let myAwesomeObj = { age: 10, label: 'Size 10 Object' };

printLabel(myAwesomeObj);

// The other version
interface ILabelValue {
	label: string;
}

function printMyAwesomeLabel(labeledObj: ILabelValue): void {
	console.log(labeledObj.label);
}

const myOtherObj = { age: 31, label: "I'm 31 years old" };

printLabel(myOtherObj);

// ============================================================================================
// Interfaces - Optional Properties
// ============================================================================================

interface ISquareConfig {
	color?: string;
	width?: number;
}

type SquareType = {
	color: string;
	area: number;
};

function createSquare(config: ISquareConfig): SquareType {
	const newSquare = { color: 'white', area: 10 };

	if (config.color) {
		newSquare.color = config.color;
	}

	if (config.width) {
		newSquare.area = config.width * config.width;
	}

	return newSquare;
}

const mySquare = createSquare({ color: 'black' });

// ============================================================================================
// Interfaces - Readonly properties
// ============================================================================================

interface IPoint {
	readonly x: number;
	readonly y: number;
}

const p1: IPoint = { x: 10, y: 20 };
// p1.x = 20; // Cannot assign to 'x' because it is a read-only property.

const a: number[] = [1, 2, 3, 4, 5];
const ro: ReadonlyArray<number> = a;

// ro[0] = 10; //Index signature in type 'readonly number[]' only permits reading.
// push, pop, shift, unshift doesn't work
// change in length doesn't work

let b: number[] = [1, 2, 3, 4, 5];
const roO: ReadonlyArray<number> = b;

b = roO as number[];

// ============================================================================================
// Excess Property Checks
// ============================================================================================

interface ISquareConfig {
	color?: string;
	width?: number;
	[propName: string]: any;
}

interface IObj {
	color: string;
	area: number;
}

function createSomeSquare(config: ISquareConfig): IObj {
	return {
		color: config.color || 'red',
		area: config.width ? config.width * config.width : 20,
	};
}

const myLittleSquare = createSomeSquare({
	color: 'green',
	width: 100,
	qwe: 10,
});

// ============================================================================================
// Function Types
// ============================================================================================

// Defined with interface
interface ISearchFunc {
	(source: string, subString: string): boolean;
}

const searchFunction: ISearchFunc = function (source, subString): boolean {
	const result = source.search(subString);

	return result > -1;
};

const myTestStr = 'I love TypeScript';

const resultOfSearchFunction = searchFunction(myTestStr, 'love');
console.log(resultOfSearchFunction);

// Defined with type
type TSearchFunc = (array: number[], element: number) => boolean;

const searchFunc: TSearchFunc = (arr, elem): boolean => {
	return arr.some(item => item < elem);
};

const myTestArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultOfSearchFunc = searchFunc(myTestArr, 6);
console.log(resultOfSearchFunc);

// ============================================================================================
// Indexable Types
// ============================================================================================
